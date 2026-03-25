const translations = {
  en: {
    brand_mark: "Nanjing | Da Bao'en Temple",
    nav_timeline: "Historical Timeline",
    nav_learn_more: "Learn More",
    nav_visitor_experience: "Visitor Experience",
    hero_title: "Porcelain Tower Timeline",
    axis_top: "2025 Museum Era",
    axis_bottom: "1011 Underground Palace",
    scene_status_initial: "Initializing 3D tower...",
    overlay_hover: "Hover tower to tilt",
    overlay_click: "Click tower to follow history",
    present_year: "2015 to 2025",
    present_title: "Ruins Museum and Rebuilt Pagoda",
    present_copy:
      "The Grand Bao'en Temple Ruins Museum and heritage park reopened the site to the public, pairing a new pagoda structure with preserved archaeological remains, exhibitions, and the underground palace.",
    industrial_year: "1856 to 1864",
    industrial_title: "Fire, War, and Collapse",
    industrial_copy:
      "During the Taiping conflict, the famous glazed pagoda and the temple complex were devastated. What survived entered memory through drawings, fragments, and later archaeological excavation.",
    medieval_year: "15th to 19th century",
    medieval_title: "A Wonder Known Across the World",
    medieval_copy:
      "The glazed tower of Nanjing became one of the city’s best-known landmarks and was widely described by foreign visitors, eventually earning a reputation as a medieval wonder in the Western imagination.",
    classical_year: "1412 to 1431",
    classical_title: "Yongle’s Imperial Reconstruction",
    classical_copy:
      "Under the Yongle Emperor, the Great Bao'en Temple was rebuilt at extraordinary scale in Nanjing, crowned by the nine-story glazed pagoda later known in English as the Porcelain Tower.",
    ancient_year: "1011 and 2008",
    ancient_title: "Song Crypt Beneath the Ming Temple",
    ancient_copy:
      "Beneath the later Ming complex lay the underground palace of the earlier Changgan Temple. Excavations in 2008 revealed a Northern Song crypt dated to 1011 and a famous Buddhist reliquary assemblage.",
    explore_button: "Explore this era",
    transition_title: "Entering the era"
  },
  zh: {
    brand_mark: "南京 | 大报恩寺",
    nav_timeline: "历史时间线",
    nav_learn_more: "了解更多",
    nav_visitor_experience: "访客体验",
    hero_title: "大报恩寺琉璃塔时间线",
    axis_top: "2025 博物馆时代",
    axis_bottom: "1011 地宫",
    scene_status_initial: "正在初始化 3D 塔模型...",
    overlay_hover: "悬停塔身可倾斜",
    overlay_click: "点击塔身跟随历史",
    present_year: "2015 至 2025",
    present_title: "遗址博物馆与重建宝塔",
    present_copy:
      "大报恩寺遗址博物馆重新开放后，游客可以同时看到重建宝塔、考古遗存、展览空间和地宫遗址。",
    industrial_year: "1856 至 1864",
    industrial_title: "战火、毁损与坍塌",
    industrial_copy:
      "太平天国战乱期间，琉璃塔和寺院建筑群遭到严重破坏。后来人们主要通过图像、残片和考古发掘来了解它。",
    medieval_year: "15 至 19 世纪",
    medieval_title: "闻名世界的奇观",
    medieval_copy:
      "南京琉璃塔后来成了这座城市最有名的地标之一，许多来访者都记下过它，它也在西方世界逐渐被视为中国建筑奇观的代表之一。",
    classical_year: "1412 至 1431",
    classical_title: "永乐时期的皇家重建",
    classical_copy:
      "明成祖永乐年间，大报恩寺在南京大规模重建，核心建筑是九层琉璃塔。后来在英语世界里，它常被称为 ‘Great Bao'en Temple’。",
    ancient_year: "1011 与 2008",
    ancient_title: "明代寺院之下的宋代地宫",
    ancient_copy:
      "明代寺院遗址下面，还埋着更早的长干寺地宫。2008 年的考古发掘发现了一座建于 1011 年的北宋地宫，以及一批重要的佛教舍利器。",
    explore_button: "探索这个时代",
    transition_title: "进入这个时代"
  }
};

const storageKey = "dabaoen-lang";
const langToggle = document.getElementById("lang-toggle");
const langMenu = document.getElementById("lang-menu");
const langOptions = document.querySelectorAll(".lang-option");

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  localStorage.setItem(storageKey, lang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  if (langToggle) {
    langToggle.textContent = lang === "zh" ? "中文" : "EN";
  }
}

function openMenu() {
  if (!langMenu || !langToggle) return;
  langMenu.hidden = false;
  langToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  if (!langMenu || !langToggle) return;
  langMenu.hidden = true;
  langToggle.setAttribute("aria-expanded", "false");
}

if (langToggle) {
  langToggle.addEventListener("click", (event) => {
    event.stopPropagation();

    if (langMenu.hidden) {
      openMenu();
    } else {
      closeMenu();
    }
  });
}

langOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedLang = option.dataset.lang;
    setLanguage(selectedLang);
    closeMenu();
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".lang-dropdown")) {
    closeMenu();
  }
});

const savedLang = localStorage.getItem(storageKey) || "en";
setLanguage(savedLang);
closeMenu();
