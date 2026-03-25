const translations = {
  en: {
    _title: "Learn More | Da Bao'en Temple",
    brand_mark: "Nanjing | Da Bao'en Temple",
    nav_timeline: "Historical Timeline",
    nav_learn_more: "Learn More",
    nav_visitor_experience: "Visitor Experience",
    kicker: "Learn More",
    title: "Visualizing the Dabao’en Temple",
    lead:
      "This page extends the historical timeline with background on the temple’s layered history, the Ming reconstruction, and the modern museum site. It works as a secondary navigation page without changing the 3D timeline on the mainpage.",
    side_label: "Start Here",
    side_title: "Use the timeline as the primary entry point.",
    side_copy:
      "Return to the Historical Timeline for the 3D tower and era navigation, then use the links below to move into deeper reading.",
    button_timeline: "Open Historical Timeline",
    button_ming: "Open Ming Era Page",
    panel_1_title: "Historical Layers",
    panel_1_copy:
      "The site is best understood as a layered religious landscape rather than a single monument. Song-period remains, the Ming imperial temple, later destruction, and modern museum interpretation all coexist within one narrative.",
    panel_2_title: "Key Era Pages",
    panel_2_copy:
      "These links jump to focused reading pages for the major chronological moments already represented in the project.",
    link_ancient: "Song Crypt and Underground Palace",
    link_classical: "Yongle’s Imperial Reconstruction",
    link_medieval: "Global Fame of the Porcelain Tower",
    link_industrial: "Destruction During War",
    link_present: "Ruins Museum and Rebuilt Pagoda",
    panel_3_title: "Spatial Reading",
    panel_3_copy:
      "The project can be framed around three spatial ideas: the vertical monument of the pagoda, the buried continuity of the underground palace, and the museum as a curated interface between archaeology and public memory.",
    panel_4_title: "Research Use",
    panel_4_copy:
      "This navigation page is useful for readers who want context first before exploring the interactive timeline. It can later be expanded with citations, archival images, maps, or a glossary without disturbing the mainpage.",
    panel_4_note:
      "Safe extension point: add more panels here later instead of rewriting the historical timeline homepage."
  },
  zh: {
    _title: "了解更多 | 大报恩寺",
    brand_mark: "南京 | 大报恩寺",
    nav_timeline: "历史时间线",
    nav_learn_more: "了解更多",
    nav_visitor_experience: "访客体验",
    kicker: "了解更多",
    title: "可视化大报恩寺",
    lead:
      "此页面为历史时间线补充大报恩寺层累历史、明代重建以及现代博物馆场地的背景信息。它作为次级导航页面存在，不会改动主页面的 3D 时间线体验。",
    side_label: "从这里开始",
    side_title: "将时间线作为主要入口。",
    side_copy:
      "先返回历史时间线页面体验 3D 塔与时代导航，再通过下方链接进入更深入的阅读内容。",
    button_timeline: "打开历史时间线",
    button_ming: "打开明代时代页面",
    panel_1_title: "历史层次",
    panel_1_copy:
      "这个地点更适合被理解为一处层累的宗教景观，而非单一纪念物。宋代遗存、明代皇家寺院、后来的毁坏，以及现代博物馆诠释共同构成了一条完整叙事。",
    panel_2_title: "重点时代页面",
    panel_2_copy:
      "这些链接可跳转到项目中已呈现的几个主要历史阶段的专题页面。",
    link_ancient: "宋代地宫与地下宫殿",
    link_classical: "永乐时期的皇家重建",
    link_medieval: "闻名世界的琉璃塔",
    link_industrial: "战乱中的毁坏",
    link_present: "遗址博物馆与重建宝塔",
    panel_3_title: "空间解读",
    panel_3_copy:
      "这个项目可以围绕三个空间概念来理解：宝塔的垂直纪念性、地宫的地下延续性，以及博物馆作为连接考古与公共记忆的策展界面。",
    panel_4_title: "研究用途",
    panel_4_copy:
      "这个导航页面适合想先建立背景认知、再进入互动时间线的读者。后续也可以继续扩展引文、档案图像、地图或术语表，而不影响主页面。",
    panel_4_note:
      "安全扩展方式：未来优先在这里继续加内容，而不是重写历史时间线首页。"
  }
};

const storageKey = "dabaoen-lang";
const langToggle = document.getElementById("lang-toggle");
const langMenu = document.getElementById("lang-menu");
const langOptions = document.querySelectorAll(".lang-option");

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = dict._title;
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
    setLanguage(option.dataset.lang);
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
