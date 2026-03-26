const translations = {
  en: {
    _title: "Visitor Experience | Da Bao'en Temple",
    brand_mark: "Nanjing | Da Bao'en Temple",
    nav_timeline: "Historical Timeline",
    nav_learn_more: "Learn More",
    nav_visitor_experience: "Visitor Experience",
    kicker: "Visitor Experience",
    title: "Visitor Essentials",
    lead: "A new page skeleton for practical visitor planning, with room to expand later.",
    button_timeline: "Start at Timeline",
    panel_1_label: "Section Preview",
    panel_1_title: "Opening Information",
    panel_2_label: "Section Preview",
    panel_2_title: "Map",
    panel_3_label: "Section Preview",
    panel_3_title: "Accessibility",
    panel_4_label: "Section Preview",
    panel_4_title: "Contemporary Exhibition Highlights",
    panel_4_note: "Reserved at the bottom for future image hosting blocks."
  },
  zh: {
    _title: "访客体验 | 大报恩寺",
    brand_mark: "南京 | 大报恩寺",
    nav_timeline: "历史时间线",
    nav_learn_more: "了解更多",
    nav_visitor_experience: "访客体验",
    kicker: "访客体验",
    title: "参观信息总览",
    lead: "这是一个新的访客信息骨架，先用于预览整体布局，后续再继续补充细节。",
    button_timeline: "从时间线开始",
    panel_1_label: "板块预览",
    panel_1_title: "开放信息",
    panel_2_label: "板块预览",
    panel_2_title: "地图",
    panel_3_label: "板块预览",
    panel_3_title: "无障碍说明",
    panel_4_label: "板块预览",
    panel_4_title: "当代展览亮点",
    panel_4_note: "底部预留给后续多个图床内容区。"
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
