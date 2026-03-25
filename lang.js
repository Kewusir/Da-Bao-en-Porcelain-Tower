const STORAGE_KEY = "dabaoen-language";

const PAGE_TEXT = {
  index: {
    title: {
      en: "Da Bao'en Temple Timeline",
      zh: "大报恩寺历史时间线"
    },
    updates: [
      [".brand-mark", { en: "Nanjing | Da Bao'en Temple", zh: "南京 | 大报恩寺" }],
      [".hero h1", { en: "Porcelain Tower Timeline", zh: "大报恩寺琉璃塔时间线" }],
      [".axis-label-top", { en: "2025 Museum Era", zh: "2025 博物馆时代" }],
      [".axis-label-bottom", { en: "1011 Underground Palace", zh: "1011 地宫" }],
      ["#scene-status", { en: "Initializing 3D tower...", zh: "正在初始化 3D 塔模型..." }],
      [".stage-overlay .overlay-chip:nth-child(1)", { en: "Hover tower to tilt", zh: "悬停塔身可倾斜" }],
      [".stage-overlay .overlay-chip:nth-child(2)", { en: "Click tower to follow history", zh: "点击塔身跟随历史" }],
      ['.timeline-row[data-era="present"] .card-year', { en: "2015 to 2025", zh: "2015 至 2025" }],
      ['.timeline-row[data-era="present"] h2', { en: "Ruins Museum and Rebuilt Pagoda", zh: "遗址博物馆与重建宝塔" }],
      ['.timeline-row[data-era="present"] .card-copy', {
        en: "The Grand Bao'en Temple Ruins Museum and heritage park reopened the site to the public, pairing a new pagoda structure with preserved archaeological remains, exhibitions, and the underground palace.",
        zh: "大报恩寺遗址博物馆及遗产公园重新向公众开放，将新建宝塔与考古遗存、展览空间以及地宫遗址共同呈现。"
      }],
      ['.timeline-row[data-era="present"] .era-button', { en: "Explore this era", zh: "探索这个时代" }],
      ['.timeline-row[data-era="industrial"] .card-year', { en: "1856 to 1864", zh: "1856 至 1864" }],
      ['.timeline-row[data-era="industrial"] h2', { en: "Fire, War, and Collapse", zh: "战火、毁损与坍塌" }],
      ['.timeline-row[data-era="industrial"] .card-copy', {
        en: "During the Taiping conflict, the famous glazed pagoda and the temple complex were devastated. What survived entered memory through drawings, fragments, and later archaeological excavation.",
        zh: "在太平天国战乱期间，著名的琉璃塔与寺院建筑群遭到严重破坏。幸存下来的部分则通过图像、残片以及后来的考古发掘进入后世记忆。"
      }],
      ['.timeline-row[data-era="industrial"] .era-button', { en: "Explore this era", zh: "探索这个时代" }],
      ['.timeline-row[data-era="medieval"] .card-year', { en: "15th to 19th century", zh: "15 至 19 世纪" }],
      ['.timeline-row[data-era="medieval"] h2', { en: "A Wonder Known Across the World", zh: "闻名世界的奇观" }],
      ['.timeline-row[data-era="medieval"] .card-copy', {
        en: "The glazed tower of Nanjing became one of the city’s best-known landmarks and was widely described by foreign visitors, eventually earning a reputation as a medieval wonder in the Western imagination.",
        zh: "南京琉璃塔成为这座城市最著名的地标之一，被众多来访者记录与传播，并在西方想象中逐渐成为中世纪奇观的代表。"
      }],
      ['.timeline-row[data-era="medieval"] .era-button', { en: "Explore this era", zh: "探索这个时代" }],
      ['.timeline-row[data-era="classical"] .card-year', { en: "1412 to 1431", zh: "1412 至 1431" }],
      ['.timeline-row[data-era="classical"] h2', { en: "Yongle’s Imperial Reconstruction", zh: "永乐时期的皇家重建" }],
      ['.timeline-row[data-era="classical"] .card-copy', {
        en: "Under the Yongle Emperor, the Great Bao'en Temple was rebuilt at extraordinary scale in Nanjing, crowned by the nine-story glazed pagoda later known in English as the Porcelain Tower.",
        zh: "在明成祖永乐年间，大报恩寺在南京以宏大规模重建，并以九层琉璃塔为核心，后被英文世界称作“Porcelain Tower”。"
      }],
      ['.timeline-row[data-era="classical"] .era-button', { en: "Explore this era", zh: "探索这个时代" }],
      ['.timeline-row[data-era="ancient"] .card-year', { en: "1011 and 2008", zh: "1011 与 2008" }],
      ['.timeline-row[data-era="ancient"] h2', { en: "Song Crypt Beneath the Ming Temple", zh: "明代寺院之下的宋代地宫" }],
      ['.timeline-row[data-era="ancient"] .card-copy', {
        en: "Beneath the later Ming complex lay the underground palace of the earlier Changgan Temple. Excavations in 2008 revealed a Northern Song crypt dated to 1011 and a famous Buddhist reliquary assemblage.",
        zh: "在后来的明代寺院之下，埋藏着更早长干寺的地宫。2008 年的考古发掘揭示了一座纪年为 1011 年的北宋地宫及其重要佛教舍利器组合。"
      }],
      ['.timeline-row[data-era="ancient"] .era-button', { en: "Explore this era", zh: "探索这个时代" }],
      ["#transition-screen .transition-title", { en: "Entering the era", zh: "进入这个时代" }]
    ]
  },

  present: {
    title: {
      en: "Ruins Museum and Rebuilt Pagoda | Da Bao'en Temple",
      zh: "遗址博物馆与重建宝塔 | 大报恩寺"
    },
    updates: [
      [".era-back", { en: "Back to timeline", zh: "返回时间线" }],
      [".era-kicker", { en: "2015 to 2025", zh: "2015 至 2025" }],
      [".era-title", { en: "Ruins Museum and Rebuilt Pagoda", zh: "遗址博物馆与重建宝塔" }],
      [".era-summary", {
        en: "The Grand Bao'en Temple Ruins Museum reopened the site as a hybrid of archaeology, civic interpretation, and contemporary memorial architecture.",
        zh: "大报恩寺遗址博物馆重新开放后，这里成了一个结合考古展示、公众参观和当代建筑表达的空间。"
      }],
      [".era-pillars span:nth-child(1)", { en: "Museum", zh: "博物馆" }],
      [".era-pillars span:nth-child(2)", { en: "Archaeology", zh: "考古" }],
      [".era-pillars span:nth-child(3)", { en: "Continuity", zh: "延续性" }],
      [".era-media-frame", { en: "Place image here", zh: "在此放置图片" }],
      [".era-media-caption", {
        en: "Recommended: museum exterior, rebuilt pagoda, or underground palace display.",
        zh: "建议：博物馆外观、重建宝塔或地宫展示照片。"
      }],
      [".era-panel:nth-of-type(1) h2", { en: "Historical Significance", zh: "历史意义" }],
      [".era-panel:nth-of-type(1) p", {
        en: "This phase reframed the site as both ruin and public institution. Instead of reconstructing the old monument literally, the project preserves excavated remains and presents the layered history of Bao'en Temple to visitors.",
        zh: "到了这一阶段，这里不只是遗址，也是面向公众开放的博物馆场所。这个项目没有直接照着旧建筑复原，而是保留考古遗存，让访客看到大报恩寺不同历史时期叠加在一起的面貌。"
      }],
      [".era-panel:nth-of-type(2) h2", { en: "Spatial and Architectural Reading", zh: "空间与建筑解读" }],
      [".era-panel:nth-of-type(2) p", {
        en: "The rebuilt pagoda and museum architecture create a measured dialogue between new construction and archaeological fragments. Circulation, controlled lighting, and vertical emphasis all support a contemporary reading of the historical site.",
        zh: "重建宝塔和博物馆建筑，把新建部分和考古遗存处理得比较清楚，也比较节制。参观动线、光线处理和宝塔的竖向形态，一起塑造了今天人们理解这处历史场所的方式。"
      }],
      [".era-panel:nth-of-type(3) h2", { en: "Memory and Legacy", zh: "记忆与遗产" }],
      [".era-panel:nth-of-type(3) p", {
        en: "Modern Bao'en Temple demonstrates how a lost monument can survive through curation, interpretation, and carefully staged continuity rather than direct imitation.",
        zh: "今天的大报恩寺说明，一座已经消失的建筑，也可以通过展览、说明和空间安排被继续记住，而不一定要原样复制。"
      }]
    ]
  },

  industrial: {
    title: {
      en: "Fire, War, and Collapse | Da Bao'en Temple",
      zh: "战火、毁损与坍塌 | 大报恩寺"
    },
    updates: [
      [".era-back", { en: "Back to timeline", zh: "返回时间线" }],
      [".era-kicker", { en: "1856 to 1864", zh: "1856 至 1864" }],
      [".era-title", { en: "Fire, War, and Collapse", zh: "战火、毁损与坍塌" }],
      [".era-summary", {
        en: "During the Taiping conflict, the famed glazed pagoda and large parts of the temple complex were destroyed, leaving fragments and memory in place of the full monument.",
        zh: "太平天国战乱期间，著名的琉璃塔和大部分寺院建筑被毁，只剩下一些残片和后人的记忆。"
      }],
      [".era-pillars span:nth-child(1)", { en: "Conflict", zh: "冲突" }],
      [".era-pillars span:nth-child(2)", { en: "Loss", zh: "失落" }],
      [".era-pillars span:nth-child(3)", { en: "Fragments", zh: "残片" }],
      [".era-media-frame", { en: "Place image here", zh: "在此放置图片" }],
      [".era-media-caption", {
        en: "Recommended: historical engraving, ruin fragment, or post-destruction interpretation image.",
        zh: "建议：历史版画、遗址残片或毁坏后的解读图片。"
      }],
      [".era-panel:nth-of-type(1) h2", { en: "Historical Significance", zh: "历史意义" }],
      [".era-panel:nth-of-type(1) p", {
        en: "This period marks the rupture between monument and afterlife. Bao'en Temple moved from standing landmark to historical absence, and later understanding of the site had to be reconstructed from remnants, texts, and recollection.",
        zh: "从这一时期开始，宝塔本体不再完整存在了。大报恩寺从城市地标变成了一处已经消失的遗址，后人只能通过遗存、文献和记忆去重新认识它。"
      }],
      [".era-panel:nth-of-type(2) h2", { en: "Spatial and Architectural Reading", zh: "空间与建筑解读" }],
      [".era-panel:nth-of-type(2) p", {
        en: "The destruction erased the complete vertical composition of the pagoda, but it also turned the architecture into an archaeological question. The monument became legible through what was missing as much as what physically remained.",
        zh: "毁坏让宝塔原本完整的形态消失了，也让它后来更多地以考古遗址的方式被研究。今天人们对它的认识，既来自残存部分，也来自那些已经消失的部分。"
      }],
      [".era-panel:nth-of-type(3) h2", { en: "Memory and Legacy", zh: "记忆与遗产" }],
      [".era-panel:nth-of-type(3) p", {
        en: "The loss of the Porcelain Tower helped fix it in global cultural memory as a vanished wonder. Its absence became one of the strongest components of its historical identity.",
        zh: "琉璃塔毁坏之后，它在很多人的印象里反而成了一座已经消失的奇观。也正因为它已经不在了，这段缺失本身反而成了它历史中最让人记住的一部分。"
      }]
    ]
  },

  medieval: {
    title: {
      en: "A Wonder Known Across the World | Da Bao'en Temple",
      zh: "闻名世界的奇观 | 大报恩寺"
    },
    updates: [
      [".era-back", { en: "Back to timeline", zh: "返回时间线" }],
      [".era-kicker", { en: "15th to 19th century", zh: "15 至 19 世纪" }],
      [".era-title", { en: "A Wonder Known Across the World", zh: "闻名世界的奇观" }],
      [".era-summary", {
        en: "The glazed pagoda of Nanjing became one of the city’s most iconic landmarks and was widely celebrated in travel writing, sketches, and historical imagination.",
        zh: "南京琉璃塔成为这座城市最具代表性的地标之一，并在游记、图绘与历史想象中被广泛传播。"
      }],
      [".era-pillars span:nth-child(1)", { en: "Fame", zh: "盛名" }],
      [".era-pillars span:nth-child(2)", { en: "Travel", zh: "游记" }],
      [".era-pillars span:nth-child(3)", { en: "Image", zh: "图像" }],
      [".era-media-frame", { en: "Place image here", zh: "在此放置图片" }],
      [".era-media-caption", {
        en: "Recommended: historic illustration, travel depiction, or panoramic reconstruction.",
        zh: "建议：历史插图、旅行图绘或全景复原图。"
      }],
      [".era-panel:nth-of-type(1) h2", { en: "Historical Significance", zh: "历史意义" }],
      [".era-panel:nth-of-type(1) p", {
        en: "Bao'en Temple moved from local sacred architecture to an international image. The tower’s fame shaped how outsiders understood Chinese monumental architecture and contributed to its legendary status.",
        zh: "大报恩寺后来不只是本地宗教建筑，也逐渐变成一张在更大范围内流传的文化形象。宝塔的名气影响了外界对中国大型建筑的印象，也让它慢慢带上了传奇色彩。"
      }],
      [".era-panel:nth-of-type(2) h2", { en: "Spatial and Architectural Reading", zh: "空间与建筑解读" }],
      [".era-panel:nth-of-type(2) p", {
        en: "Its appeal came from height, symmetry, and luminous glazed surfaces. The monument stood not only as a religious tower but also as a carefully staged urban spectacle.",
        zh: "它之所以吸引人，和它的高度、对称结构，还有明亮的琉璃表面都有关系。它不只是一座宗教塔，也是当时南京非常醒目的城市景观。"
      }],
      [".era-panel:nth-of-type(3) h2", { en: "Memory and Legacy", zh: "记忆与遗产" }],
      [".era-panel:nth-of-type(3) p", {
        en: "Even after destruction, the image of the Porcelain Tower continued to circulate as a shorthand for refinement, imperial ambition, and the fragility of cultural splendor.",
        zh: "即使后来被毁，琉璃塔的图像还是一直流传，也常被看作工艺水平、皇权气象和历史兴衰的象征。"
      }]
    ]
  },

  classical: {
    title: {
      en: "Yongle’s Imperial Reconstruction | Da Bao'en Temple",
      zh: "永乐时期的皇家重建 | 大报恩寺"
    },
    updates: [
      [".era-back", { en: "Back to timeline", zh: "返回时间线" }],
      [".era-kicker", { en: "1412 to 1431", zh: "1412 至 1431" }],
      [".era-title", { en: "Yongle’s Imperial Reconstruction", zh: "永乐时期的皇家重建" }],
      [".era-summary", {
        en: "Under the Yongle Emperor, the Great Bao'en Temple was rebuilt at monumental scale in Nanjing and crowned by the celebrated nine-story glazed pagoda.",
        zh: "明成祖永乐时期，大报恩寺在南京大规模重建，最核心的建筑就是著名的九层琉璃塔。"
      }],
      [".era-pillars span:nth-child(1)", { en: "Imperial", zh: "皇家" }],
      [".era-pillars span:nth-child(2)", { en: "Glazed Tower", zh: "琉璃塔" }],
      [".era-pillars span:nth-child(3)", { en: "Ming Nanjing", zh: "明代南京" }],
      [".era-media-frame", { en: "Place image here", zh: "在此放置图片" }],
      [".era-media-caption", {
        en: "Recommended: reconstruction view, pagoda elevation, or Ming ceremonial rendering.",
        zh: "建议：复原图、宝塔立面图或明代礼制场景图。"
      }],
      [".era-panel:nth-of-type(1) h2", { en: "Historical Significance", zh: "历史意义" }],
      [".era-panel:nth-of-type(1) p", {
        en: "This was the defining imperial phase of Bao'en Temple. It linked Buddhist devotion, dynastic authority, and the ceremonial importance of Nanjing into one powerful architectural statement.",
        zh: "这是大报恩寺历史上最关键的皇家重建阶段。这次重建把佛教信仰、皇权象征和南京的礼制地位集中体现在建筑上。"
      }],
      [".era-panel:nth-of-type(2) h2", { en: "Spatial and Architectural Reading", zh: "空间与建筑解读" }],
      [".era-panel:nth-of-type(2) p", {
        en: "The complex culminated in a tall glazed pagoda whose luminous skin distinguished it from ordinary masonry towers. The building embodied technical refinement and political visibility at once.",
        zh: "整组建筑中最醒目的就是高耸的琉璃塔，表面的琉璃装饰也让它和一般砖塔很不一样。这座塔既体现了当时的工艺水平，也非常能代表皇家的气势。"
      }],
      [".era-panel:nth-of-type(3) h2", { en: "Memory and Legacy", zh: "记忆与遗产" }],
      [".era-panel:nth-of-type(3) p", {
        en: "Most later accounts of Bao'en Temple take this Ming phase as the monument’s canonical form. It remains the reference point for nearly every modern reconstruction of the site’s image.",
        zh: "后来人们提到大报恩寺时，很多都是以这一明代形态为标准来想象它的。今天很多复原图，基本也是以这一时期的样貌为参考。"
      }]
    ]
  },

  ancient: {
    title: {
      en: "Song Crypt Beneath the Ming Temple | Da Bao'en Temple",
      zh: "明代寺院之下的宋代地宫 | 大报恩寺"
    },
    updates: [
      [".era-back", { en: "Back to timeline", zh: "返回时间线" }],
      [".era-kicker", { en: "1011 and 2008", zh: "1011 与 2008" }],
      [".era-title", { en: "Song Crypt Beneath the Ming Temple", zh: "明代寺院之下的宋代地宫" }],
      [".era-summary", {
        en: "Excavations in 2008 revealed the underground palace of the earlier Changgan Temple, including a Northern Song crypt dated to 1011 and an important reliquary assemblage.",
        zh: "2008 年的考古发掘揭示了更早长干寺的地宫，其中包括一座纪年为 1011 年的北宋地宫及其重要舍利器组合。"
      }],
      [".era-pillars span:nth-child(1)", { en: "Underground Palace", zh: "地宫" }],
      [".era-pillars span:nth-child(2)", { en: "Reliquary", zh: "舍利器" }],
      [".era-pillars span:nth-child(3)", { en: "Stratified Site", zh: "层累遗址" }],
      [".era-media-frame", { en: "Place image here", zh: "在此放置图片" }],
      [".era-media-caption", {
        en: "Recommended: crypt find, underground palace plan, or reliquary detail.",
        zh: "建议：地宫出土物、地宫平面图或舍利器细节图。"
      }],
      [".era-panel:nth-of-type(1) h2", { en: "Historical Significance", zh: "历史意义" }],
      [".era-panel:nth-of-type(1) p", {
        en: "This discovery pushed the story of Bao'en Temple beneath the visible Ming monument and re-established the site as a layered sacred landscape with deeper historical continuity.",
        zh: "这次发现让人们看到，明代遗址下面还有更早的历史，也说明这里不是单一时期的遗址，而是层层叠加形成的。"
      }],
      [".era-panel:nth-of-type(2) h2", { en: "Spatial and Architectural Reading", zh: "空间与建筑解读" }],
      [".era-panel:nth-of-type(2) p", {
        en: "The underground palace reveals a hidden ritual order below later rebuilding. It shows how later dynastic architecture was built over, and in dialogue with, older sacred foundations rather than on a neutral site.",
        zh: "地宫让人们看到，后来的重建下面还保留着更早的礼仪和空间结构。这也说明，后来的王朝建筑不是凭空建起来的，而是在更早的宗教基础上继续发展出来的。"
      }],
      [".era-panel:nth-of-type(3) h2", { en: "Memory and Legacy", zh: "记忆与遗产" }],
      [".era-panel:nth-of-type(3) p", {
        en: "The archaeological discoveries gave modern Bao'en Temple its strongest material anchor and transformed the site from a story of loss alone into one of historical depth and continuity.",
        zh: "这些考古发现为今天的大报恩寺提供了最扎实的实物依据，也让这处遗址不再只是一个关于消失的故事，而是一个有更长历史脉络的地方。"
      }]
    ]
  }
};

const DYNAMIC_TEXT = {
  "index.status.file_protocol": {
    en: "Please run this page with a local server. file:// blocks module and OBJ loading.",
    zh: "请通过本地服务器运行此页面。file:// 会阻止模块与 OBJ 模型加载。"
  },
  "index.status.runtime_error": {
    en: "Runtime error: {message}",
    zh: "运行错误：{message}"
  },
  "index.status.loading": {
    en: "Loading 3D temple...",
    zh: "正在加载 3D 寺塔..."
  },
  "index.status.webgl_failed": {
    en: "WebGL initialization failed in this browser.",
    zh: "当前浏览器无法初始化 WebGL。"
  },
  "index.status.obj_failed": {
    en: "OBJ failed to load. Please run through a local server.",
    zh: "OBJ 模型加载失败，请通过本地服务器打开。"
  }
};

function interpolate(template, vars = {}) {
  return String(template).replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? "");
}

function getLanguage() {
  return localStorage.getItem(STORAGE_KEY) || "en";
}

function getPageKey() {
  const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const params = new URLSearchParams(location.search);

  if (file === "" || file === "index.html") return "index";
  if (file === "present.html") return "present";
  if (file === "industrial.html") return "industrial";
  if (file === "medieval.html") return "medieval";
  if (file === "classical.html") return "classical";
  if (file === "ancient.html") return "ancient";
  if (file === "era.html") return params.get("era") || "medieval";

  return null;
}

function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}

function applyPageLanguage(lang) {
  const pageKey = getPageKey();
  if (!pageKey || !PAGE_TEXT[pageKey]) return;

  const page = PAGE_TEXT[pageKey];
  document.title = page.title[lang] || page.title.en;

  page.updates.forEach(([selector, value]) => {
    setText(selector, value[lang] || value.en);
  });
}

function updateSwitcherUI(lang) {
  const switcher = document.querySelector("[data-lang-switch]");
  if (!switcher) return;

  const button = switcher.querySelector(".lang-switch-button");
  const options = switcher.querySelectorAll("[data-lang-option]");

  if (button) {
    button.textContent = lang === "zh" ? "中文" : "EN";
  }

  options.forEach((option) => {
    option.dataset.active = option.dataset.langOption === lang ? "true" : "false";
  });
}

function applyLanguage(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  localStorage.setItem(STORAGE_KEY, lang);
  applyPageLanguage(lang);
  updateSwitcherUI(lang);

  window.dispatchEvent(
    new CustomEvent("site-language-change", {
      detail: { language: lang }
    })
  );
}

function t(key, fallback = "", vars = {}) {
  const lang = getLanguage();
  const entry = DYNAMIC_TEXT[key];
  const template = entry ? entry[lang] || entry.en : fallback;
  return interpolate(template, vars);
}

function setupSwitcher() {
  const switcher = document.querySelector("[data-lang-switch]");
  if (!switcher) return;

  const button = switcher.querySelector(".lang-switch-button");
  const menu = switcher.querySelector(".lang-switch-menu");
  const options = switcher.querySelectorAll("[data-lang-option]");

  if (!button || !menu) return;

  button.addEventListener("click", () => {
    const open = !menu.hasAttribute("hidden");
    if (open) {
      menu.setAttribute("hidden", "");
      button.setAttribute("aria-expanded", "false");
    } else {
      menu.removeAttribute("hidden");
      button.setAttribute("aria-expanded", "true");
    }
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      applyLanguage(option.dataset.langOption);
      menu.setAttribute("hidden", "");
      button.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (!switcher.contains(event.target)) {
      menu.setAttribute("hidden", "");
      button.setAttribute("aria-expanded", "false");
    }
  });
}

window.DABAOEN_I18N = {
  getLanguage,
  applyLanguage,
  t
};

setupSwitcher();
applyLanguage(getLanguage());
