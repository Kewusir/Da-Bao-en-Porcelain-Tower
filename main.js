import * as THREE from "three";
import { OBJLoader } from "./assets/OBJLoader.js";

const canvas = document.querySelector("#tower-canvas");
const sceneWrap = document.querySelector(".scene-wrap");
const sceneStatus = document.querySelector("#scene-status");
const transitionScreen = document.querySelector("#transition-screen");
const rows = [...document.querySelectorAll(".timeline-row")];

const eras = [
  {
    id: "present",
    color: "#8f7a49",
    towerT: 0.88,
    hover: { x: THREE.MathUtils.degToRad(-8), y: THREE.MathUtils.degToRad(-12) },
    view: { x: -0.1, y: -0.16, zoom: 1.03 }
  },
  {
    id: "industrial",
    color: "#6f8a8f",
    towerT: 0.69,
    hover: { x: THREE.MathUtils.degToRad(-3), y: THREE.MathUtils.degToRad(-5) },
    view: { x: -0.03, y: -0.06, zoom: 1.02 }
  },
  {
    id: "medieval",
    color: "#a98d5d",
    towerT: 0.5,
    hover: { x: THREE.MathUtils.degToRad(4), y: 0 },
    view: { x: 0.06, y: 0.02, zoom: 1.01 }
  },
  {
    id: "classical",
    color: "#d0a85a",
    towerT: 0.31,
    hover: { x: THREE.MathUtils.degToRad(7), y: THREE.MathUtils.degToRad(8) },
    view: { x: 0.12, y: 0.08, zoom: 1.02 }
  },
  {
    id: "ancient",
    color: "#b45b43",
    towerT: 0.12,
    hover: { x: THREE.MathUtils.degToRad(10), y: THREE.MathUtils.degToRad(12) },
    view: { x: 0.18, y: 0.14, zoom: 1.03 }
  }
];

const state = {
  activeEra: "medieval",
  hovered: false,
  lastPointerY: null,
  targetRotationX: 0.06,
  targetRotationY: 0.02,
  targetScale: 1.14,
  targetBandBoost: 0.55,
  baseSpinAngle: 0,
  displayYawOffset: 0.02,
  spinImpulse: 0,
  ready: false
};

let renderer;
let scene;
let camera;
let modelRoot = null;
let towerGroup = null;
let glowLight = null;
let sweepLight = null;
let objectMetrics = null;
let activeBand = null;
const focusBands = [];
const loader = new OBJLoader();
const clock = new THREE.Clock();
let scrollAnimationFrame = 0;

if (location.protocol === "file:") {
  showSceneStatus("Please run this page with a local server. file:// blocks module and OBJ loading.");
} else {
  initScene();
}

window.addEventListener("error", (event) => {
  showSceneStatus(`Runtime error: ${event.message}`);
});

function initScene() {
  showSceneStatus("Loading 3D temple...");

  try {
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070605, 0.022);
    camera = new THREE.PerspectiveCamera(32, 1, 0.1, 5000);
    camera.position.set(0, 0, 16);

    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(sceneWrap.clientWidth, sceneWrap.clientHeight, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);

    scene.add(new THREE.AmbientLight(0xf2e7cf, 1.3));

    const hemi = new THREE.HemisphereLight(0xe7dcc5, 0x0b0a09, 1.1);
    hemi.position.set(0, 1, 0);
    scene.add(hemi);

    const key = new THREE.DirectionalLight(0xf6e9cf, 1.65);
    key.position.set(3, 8, 7);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0x8f7650, 0.9);
    fill.position.set(-6, 3, 5);
    scene.add(fill);

    glowLight = new THREE.PointLight(0xe5b66a, 1.22, 180, 2);
    glowLight.position.set(0, 40, 40);
    scene.add(glowLight);

    sweepLight = new THREE.PointLight(0xf4d08d, 1.35, 38, 2);
    sweepLight.position.set(0, 0, 12);
    scene.add(sweepLight);

    towerGroup = new THREE.Group();
    scene.add(towerGroup);

    resizeRenderer();
    loadModel();
    animate();
  } catch (error) {
    console.error(error);
    showSceneStatus("WebGL initialization failed in this browser.");
  }
}

function loadModel() {
  loader.load(
    "assets/model.obj",
    (obj) => {
      modelRoot = obj;
      applyModelMaterial(obj);
      normalizeModel(obj);
      towerGroup.add(obj);
      buildBands();
      syncToEra(state.activeEra, { preserveScroll: true });
      hideSceneStatus();
      state.ready = true;
    },
    undefined,
    (error) => {
      console.error(error);
      showSceneStatus("OBJ failed to load. Please run through a local server.");
    }
  );
}

function applyModelMaterial(obj) {
  obj.traverse((child) => {
    if (!child.isMesh) {
      return;
    }

    if (!child.geometry.attributes.normal) {
      child.geometry.computeVertexNormals();
    }

    child.material = new THREE.MeshPhysicalMaterial({
      color: 0x8b8072,
      roughness: 0.76,
      metalness: 0.04,
      clearcoat: 0.08,
      clearcoatRoughness: 0.8,
      side: THREE.DoubleSide,
      emissive: new THREE.Color(0x231a12),
      emissiveIntensity: 0.08
    });
  });
}

function normalizeModel(obj) {
  const initialBox = new THREE.Box3().setFromObject(obj);
  const size = initialBox.getSize(new THREE.Vector3());
  const center = initialBox.getCenter(new THREE.Vector3());
  const targetHeight = 17.5;
  const scale = targetHeight / Math.max(size.y, 1);

  obj.position.sub(center);
  obj.scale.setScalar(scale);
  obj.updateMatrixWorld(true);

  const fittedBox = new THREE.Box3().setFromObject(obj);
  const fittedSize = fittedBox.getSize(new THREE.Vector3());
  const fittedCenter = fittedBox.getCenter(new THREE.Vector3());

  obj.position.x -= fittedCenter.x;
  obj.position.y -= fittedCenter.y;
  obj.position.z -= fittedCenter.z;
  obj.updateMatrixWorld(true);

  const finalBox = new THREE.Box3().setFromObject(obj);
  objectMetrics = {
    box: finalBox,
    size: finalBox.getSize(new THREE.Vector3()),
    center: finalBox.getCenter(new THREE.Vector3())
  };

  frameObject();
}

function frameObject() {
  if (!objectMetrics) {
    return;
  }

  const { size, center } = objectMetrics;
  const height = Math.max(size.y, 1);
  const width = Math.max(size.x, 1);
  const aspect = sceneWrap.clientWidth / Math.max(sceneWrap.clientHeight, 1);
  const halfFov = THREE.MathUtils.degToRad(camera.fov * 0.5);
  const fitHeight = height * 0.5 / Math.tan(halfFov);
  const fitWidth = width * 0.5 / (Math.tan(halfFov) * aspect);
  const distance = Math.max(fitHeight, fitWidth) * 1.28;

  camera.position.set(width * 0.08, center.y + height * 0.06, distance);
  camera.near = Math.max(0.1, distance / 80);
  camera.far = distance * 20;
  camera.lookAt(center.x, center.y + height * 0.03, center.z);
  camera.updateProjectionMatrix();
}

function buildBands() {
  focusBands.splice(0, focusBands.length);

  const { box, size } = objectMetrics;
  const radius = Math.max(size.x, size.z) * 0.42;

  for (const era of eras) {
    const y = THREE.MathUtils.lerp(box.min.y, box.max.y, era.towerT);
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius, radius * 0.08, 18, 96),
      new THREE.MeshBasicMaterial({
        color: era.color,
        transparent: true,
        opacity: 0.22
      })
    );

    ring.rotation.x = Math.PI / 2;
    ring.position.y = y;
    ring.userData = { era: era.id, baseScale: 1, color: era.color };
    towerGroup.add(ring);
    focusBands.push(ring);
  }
}

function getEraById(id) {
  return eras.find((era) => era.id === id) ?? eras[2];
}

function getRowById(id) {
  return document.querySelector(`.timeline-row[data-era="${id}"]`);
}

function getCardById(id) {
  return getRowById(id)?.querySelector(".timeline-card") ?? null;
}

function showSceneStatus(message) {
  sceneStatus.textContent = message;
  sceneStatus.classList.remove("hidden");
}

function hideSceneStatus() {
  sceneStatus.classList.add("hidden");
}

function resizeRenderer() {
  if (!renderer || !camera) {
    return;
  }

  const width = sceneWrap.clientWidth;
  const height = sceneWrap.clientHeight;
  renderer.setSize(width, height, false);
  camera.aspect = width / Math.max(height, 1);
  frameObject();
}

function pulseCard(card) {
  if (!card) {
    return;
  }

  card.classList.remove("card-jump");
  requestAnimationFrame(() => {
    card.classList.add("card-jump");
  });
}

function updateDomState(activeId) {
  rows.forEach((row) => {
    const active = row.dataset.era === activeId;
    row.querySelector(".timeline-card")?.classList.toggle("active", active);
    row.querySelector(".node-button")?.classList.toggle("active", active);
  });
}

function updateBands(activeId) {
  activeBand = activeId;
  focusBands.forEach((band) => {
    const active = band.userData.era === activeId;
    band.material.opacity = active ? 0.74 : 0.2;
    band.scale.setScalar(active ? 1.18 : 1);
  });
}

function syncToEra(eraId, options = {}) {
  const era = getEraById(eraId);
  state.activeEra = era.id;
  updateDomState(era.id);
  updateBands(era.id);

  if (!options.preserveRotation) {
    state.targetRotationX = era.view.x;
    state.targetRotationY = era.view.y;
    state.targetScale = era.view.zoom + 0.12;
  }

  state.spinImpulse = 0.042;
}

function scrollToEra(eraId) {
  const row = getRowById(eraId);
  if (!row) {
    return;
  }

  linearScrollTo(row);
  pulseCard(getCardById(eraId));
}

function linearScrollTo(element) {
  cancelAnimationFrame(scrollAnimationFrame);

  const startY = window.scrollY;
  const rect = element.getBoundingClientRect();
  const targetY = rect.top + window.scrollY - (window.innerHeight - rect.height) * 0.5;
  const distance = targetY - startY;
  const duration = Math.max(1200, Math.min(2100, Math.abs(distance) * 0.9));
  const startTime = performance.now();

  function step(now) {
    const progress = Math.min(1, (now - startTime) / duration);
    window.scrollTo(0, startY + distance * progress);

    if (progress < 1) {
      scrollAnimationFrame = requestAnimationFrame(step);
    }
  }

  scrollAnimationFrame = requestAnimationFrame(step);
}

function getEraFromPointer(clientY) {
  const rect = canvas.getBoundingClientRect();
  const normalized = THREE.MathUtils.clamp((clientY - rect.top) / rect.height, 0, 0.999);
  const index = Math.min(eras.length - 1, Math.floor((1 - normalized) * eras.length));
  return eras[index];
}

function enterEraPage(eraId) {
  const era = getEraById(eraId);
  const eraPages = {
    present: "./present.html",
    industrial: "./industrial.html",
    medieval: "./medieval.html",
    classical: "./classical.html",
    ancient: "./ancient.html"
  };
  state.hovered = false;
  state.targetRotationX = era.view.x - 0.02;
  state.targetRotationY = era.view.y + 0.28;
  state.targetScale = era.view.zoom + 0.18;
  state.spinImpulse = 0.06;
  pulseCard(getCardById(eraId));

  if (transitionScreen) {
    transitionScreen.classList.add("active");
  }

  window.setTimeout(() => {
    window.location.href = eraPages[eraId] || "./medieval.html";
  }, 900);
}

function handleTowerHover(clientY) {
  const era = getEraFromPointer(clientY);
  state.hovered = true;
  state.lastPointerY = clientY;
  state.targetRotationX = era.hover.x;
  state.targetRotationY = era.hover.y;
  state.targetScale = 1.18;
  state.spinImpulse = 0.018;
  updateBands(era.id);
}

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (!visible.length) {
      return;
    }

    syncToEra(visible[0].target.dataset.era);
  },
  {
    threshold: [0.35, 0.6, 0.85],
    rootMargin: "-12% 0px -12% 0px"
  }
);

rows.forEach((row) => observer.observe(row));

canvas.addEventListener("pointermove", (event) => {
  if (!state.ready) {
    return;
  }

  handleTowerHover(event.clientY);
});

canvas.addEventListener("pointerenter", (event) => {
  if (!state.ready) {
    return;
  }

  handleTowerHover(event.clientY);
});

canvas.addEventListener("pointerleave", () => {
  state.hovered = false;
  syncToEra(state.activeEra);
});

canvas.addEventListener("click", () => {
  const era = state.lastPointerY ? getEraFromPointer(state.lastPointerY) : getEraById(state.activeEra);
  syncToEra(era.id);
  scrollToEra(era.id);
});

document.addEventListener("click", (event) => {
  const node = event.target.closest(".node-button");
  const cardButton = event.target.closest(".era-button");

  if (node) {
    const eraId = node.dataset.eraTrigger;
    syncToEra(eraId);
    scrollToEra(eraId);
    return;
  }

  if (cardButton) {
    event.preventDefault();
    const eraId = cardButton.closest(".timeline-row").dataset.era;
    enterEraPage(eraId);
  }
});

window.addEventListener("resize", resizeRenderer);
syncToEra(state.activeEra);

function animate() {
  requestAnimationFrame(animate);

  if (!renderer || !scene || !camera || !towerGroup || !glowLight || !sweepLight) {
    return;
  }

  const delta = Math.min(clock.getDelta(), 0.033);
  const elapsed = clock.elapsedTime;
  const driftOffset = Math.sin(elapsed * 0.18) * 0.04;

  towerGroup.rotation.x = THREE.MathUtils.damp(towerGroup.rotation.x, state.targetRotationX, 3.2, delta);
  state.baseSpinAngle += 0.0012 + state.spinImpulse;
  state.displayYawOffset = THREE.MathUtils.damp(
    state.displayYawOffset,
    state.targetRotationY + driftOffset,
    2.1,
    delta
  );
  towerGroup.rotation.y = state.baseSpinAngle + state.displayYawOffset;
  state.spinImpulse = THREE.MathUtils.damp(state.spinImpulse, 0, 2.2, delta);

  const scale = THREE.MathUtils.damp(towerGroup.scale.x, state.targetScale, 3, delta);
  towerGroup.scale.setScalar(scale);

  focusBands.forEach((band) => {
    const active = band.userData.era === activeBand;
    band.rotation.z += active ? delta * 0.14 : delta * 0.05;
    band.position.z = Math.sin(elapsed * 1.6 + band.position.y * 0.05) * 0.08;
  });

  if (modelRoot) {
    const sweepPhase = (Math.sin(elapsed * 0.52) + 1) * 0.5;
    const sweepY = THREE.MathUtils.lerp(objectMetrics.box.min.y, objectMetrics.box.max.y, sweepPhase);
    sweepLight.position.set(0, sweepY, 11);
    sweepLight.color.set(activeBand ? getEraById(activeBand).color : "#f4d08d");
    sweepLight.intensity = THREE.MathUtils.damp(sweepLight.intensity, state.hovered ? 2.1 : 1.28, 2.2, delta);

    modelRoot.traverse((child) => {
      if (!child.isMesh) {
        return;
      }

      child.material.emissive.set(activeBand ? getEraById(activeBand).color : "#231a12");
      child.material.emissiveIntensity = THREE.MathUtils.damp(
        child.material.emissiveIntensity,
        state.hovered ? 0.13 : 0.09,
        3.4,
        delta
      );
    });
  }

  glowLight.color.set(activeBand ? getEraById(activeBand).color : "#ffffff");
  glowLight.intensity = THREE.MathUtils.damp(glowLight.intensity, state.hovered ? 1.9 : 1.18, 2.6, delta);

  renderer.render(scene, camera);
}
