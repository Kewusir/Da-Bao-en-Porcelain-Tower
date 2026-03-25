const translations = {
  en: {
    _title: "Visitor Experience | Da Bao'en Temple",
    brand_mark: "Nanjing | Da Bao'en Temple",
    nav_timeline: "Historical Timeline",
    nav_learn_more: "Learn More",
    nav_visitor_experience: "Visitor Experience",
    kicker: "Visitor Experience",
    title: "Plan a Guided Journey Through the Site",
    lead:
      "This page supports visitor-oriented navigation. It can introduce a recommended route, highlight key moments to explore first, and funnel people back into the main historical timeline and detailed era pages.",
    side_label: "Recommended Start",
    side_title: "Begin with the 3D timeline, then move into details.",
    side_copy:
      "The mainpage remains the core experience. From there, visitors can branch into focused reading about the crypt, the Ming pagoda, or the present-day museum.",
    button_timeline: "Start at Timeline",
    button_museum: "Open Museum Era",
    panel_1_title: "Recommended Route",
    panel_1_copy:
      "Start with the Historical Timeline to understand the full chronology. Next, open the Song crypt page for the buried origins of the site, then continue to the Ming reconstruction and finally the present-day museum phase.",
    panel_2_title: "Quick Access",
    link_timeline: "Interactive Historical Timeline",
    link_ancient: "Underground Palace and Reliquary",
    link_classical: "Imperial Reconstruction",
    link_present: "Ruins Museum",
    panel_3_title: "Visitor Prompts",
    panel_3_copy:
      "Encourage users to compare what is visible above ground with what survives below ground, and to think about how a lost monument can continue through excavation, reconstruction, and exhibition design.",
    panel_4_title: "Future Expansion",
    panel_4_copy:
      "This page can later hold ticketing, opening information, maps, accessibility notes, or gallery highlights. For now it works as a clean navigation layer that does not alter the timeline page’s existing structure.",
    panel_4_note:
      "Current safe scope: page-level navigation only, with no changes to your 3D rendering or existing timeline interactions."
  },
  zh: {
    _title: "访客体验 | 大报恩寺",
    brand_mark: "南京 | 大报恩寺",
    nav_timeline: "历史时间线",
    nav_learn_more: "了解更多",
    nav_visitor_experience: "访客体验",
    kicker: "访客体验",
    title: "为参观整理一条浏览路线",
    lead:
      "这个页面主要用来给访客做浏览引导。它会介绍推荐路线、标出值得先看的部分，并把用户带回主时间线和更详细的时代页面。",
    side_label: "推荐起点",
    side_title: "先看 3D 时间线，再看详细内容。",
    side_copy:
      "主页面还是最主要的入口。从那里可以继续进入地宫、明代宝塔和现代博物馆的专题内容。",
    button_timeline: "从时间线开始",
    button_museum: "打开博物馆时代",
    panel_1_title: "推荐路线",
    panel_1_copy:
      "建议先从历史时间线看整体年代顺序，再进入宋代地宫页面了解更早的历史，接着再看明代重建和当代博物馆。",
    panel_2_title: "快速入口",
    link_timeline: "互动历史时间线",
    link_ancient: "地宫与舍利器",
    link_classical: "皇家重建",
    link_present: "遗址博物馆",
    panel_3_title: "访客提示",
    panel_3_copy:
      "可以引导访客对照地面上的建筑和地下遗存，也可以让他们想一想，这座已经消失的建筑后来是怎样通过考古、重建和展览继续被人认识的。",
    panel_4_title: "未来扩展",
    panel_4_copy:
      "以后这个页面还可以加入票务、开放信息、地图、无障碍说明或展览亮点。现在它主要承担导航作用，不会改动时间线页面原有结构。",
    panel_4_note:
      "目前只做页面导航，不动你的 3D 渲染和现有时间线交互。"
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

if (langToggle && langMenu) {
  langToggle.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (langMenu.hidden) {
      openMenu();
    } else {
      closeMenu();
    }
  });
}

langOptions.forEach((option) => {
  option.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    setLanguage(option.dataset.lang);
    closeMenu();
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".lang-dropdown")) {
    closeMenu();
  }
});

setLanguage(localStorage.getItem(storageKey) || "en");
closeMenu();
