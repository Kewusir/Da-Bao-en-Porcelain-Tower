(function () {
  const mapElement = document.getElementById("visitor-leaflet-map");
  const toolbarElement = document.querySelector(".visitor-map-toolbar");

  if (!mapElement || !toolbarElement || typeof L === "undefined") {
    return;
  }

  const layerData = [
    {
      id: "temple",
      label: "Temple",
      color: "#d9aa5e",
      items: [
        {
          enName: "Da Bao'en Temple",
          zhName: "大报恩寺",
          enDescription: "Main destination for the visit.",
          zhDescription: "本次参观的核心目的地。",
          featured: true,
          coords: [32.0156, 118.7869]
        }
      ]
    },
    {
      id: "airport",
      label: "Airport",
      color: "#8ab4f8",
      items: [
        {
          enName: "Nanjing Lukou International Airport",
          zhName: "南京禄口国际机场",
          enDescription: "Primary airport serving Nanjing.",
          zhDescription: "南京主要民航机场。",
          coords: [31.7357, 118.8656]
        }
      ]
    },
    {
      id: "rail-metro",
      label: "Rail & Metro",
      color: "#7fd1ae",
      items: [
        {
          enName: "Nanjing South Railway Station",
          zhName: "南京南站",
          enDescription: "Major high-speed rail hub.",
          zhDescription: "南京重要的高铁交通枢纽。",
          coords: [31.9738, 118.8041]
        },
        {
          enName: "Zhonghuamen Station",
          zhName: "中华门站",
          enDescription: "Metro connection near the temple area.",
          zhDescription: "靠近大报恩寺片区的地铁站。",
          coords: [32.0149, 118.7787]
        },
        {
          enName: "Yuhuamen Station",
          zhName: "雨花门站",
          enDescription: "Another nearby metro stop for visitors.",
          zhDescription: "游客可使用的另一处附近地铁站。",
          coords: [32.0105, 118.7812]
        }
      ]
    },
    {
      id: "hotels",
      label: "Hotels",
      color: "#f28b82",
      items: [
        {
          enName: "Jinling Hotel Nanjing",
          zhName: "金陵饭店",
          enDescription: "Popular city-center hotel option.",
          zhDescription: "市区内较受欢迎的酒店选择。",
          coords: [32.0398, 118.7843]
        },
        {
          enName: "Holiday Inn Nanjing Aqua City",
          zhName: "南京水游城假日酒店",
          enDescription: "Convenient stay close to major sights.",
          zhDescription: "靠近主要景点的便捷住宿选择。",
          coords: [32.0217, 118.7906]
        }
      ]
    }
  ];

  function createIcon(color, featured) {
    if (featured) {
      return L.divIcon({
        className: "visitor-map-marker visitor-map-marker-featured",
        html:
          '<span class="visitor-map-featured-pin"></span>' +
          '<span class="visitor-map-featured-halo"></span>' +
          '<span class="visitor-map-featured-badge">Temple<br>大报恩寺</span>',
        iconSize: [124, 72],
        iconAnchor: [26, 52],
        popupAnchor: [24, -38]
      });
    }

    return L.divIcon({
      className: "visitor-map-marker",
      html:
        '<span style="display:block;width:14px;height:14px;border-radius:50%;background:' +
        color +
        ';border:2px solid rgba(19,18,16,0.92);box-shadow:0 0 0 7px rgba(0,0,0,0.12);"></span>',
      iconSize: [18, 18],
      iconAnchor: [9, 9],
      popupAnchor: [0, -10]
    });
  }

  const map = L.map(mapElement, {
    zoomControl: true,
    scrollWheelZoom: false
  }).setView([32.0156, 118.7869], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const activeLayerIds = new Set(layerData.map((layer) => layer.id));
  const layerRegistry = new Map();

  function renderPopupContent(item) {
    return (
      "<strong>" +
      item.enName +
      "</strong>" +
      "<span>" +
      item.zhName +
      "</span>" +
      '<span class="visitor-map-popup-copy">' +
      item.enDescription +
      "</span>" +
      '<span class="visitor-map-popup-copy">' +
      item.zhDescription +
      "</span>"
    );
  }

  function renderLabelContent(item) {
    return (
      '<span class="visitor-map-label-title">' +
      item.enName +
      "</span>" +
      '<span class="visitor-map-label-subtitle">' +
      item.zhName +
      "</span>"
    );
  }

  layerData.forEach((layer) => {
    const group = L.layerGroup();

    layer.items.forEach((item) => {
      const marker = L.marker(item.coords, {
        icon: createIcon(layer.color, item.featured)
      })
        .bindPopup(renderPopupContent(item), {
          offset: item.featured ? [22, -24] : [0, -10]
        })
        .bindTooltip(renderLabelContent(item), {
          permanent: true,
          direction: item.featured ? "right" : "top",
          offset: item.featured ? [42, -16] : [0, -14],
          className: item.featured
            ? "visitor-map-label visitor-map-label-featured"
            : "visitor-map-label"
        });

      marker.addTo(group);
    });

    group.addTo(map);
    layerRegistry.set(layer.id, group);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "visitor-map-toggle is-active";
    button.textContent = layer.label;
    button.setAttribute("aria-pressed", "true");
    button.dataset.layerId = layer.id;

    button.addEventListener("click", function () {
      const layerGroup = layerRegistry.get(layer.id);
      if (!layerGroup) {
        return;
      }

      if (activeLayerIds.has(layer.id)) {
        map.removeLayer(layerGroup);
        activeLayerIds.delete(layer.id);
        button.classList.remove("is-active");
        button.setAttribute("aria-pressed", "false");
      } else {
        layerGroup.addTo(map);
        activeLayerIds.add(layer.id);
        button.classList.add("is-active");
        button.setAttribute("aria-pressed", "true");
      }
    });

    toolbarElement.appendChild(button);
  });

  window.addEventListener("load", function () {
    map.invalidateSize();
  });

  window.addEventListener("resize", function () {
    map.invalidateSize();
  });
})();
