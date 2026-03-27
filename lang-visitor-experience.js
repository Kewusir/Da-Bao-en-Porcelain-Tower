const translations = {
  en: {
    _title: "Visitor Experience | Da Bao'en Temple",
    brand_mark: "Nanjing | Da Bao'en Temple",
    nav_timeline: "Historical Timeline",
    nav_learn_more: "Learn More",
    nav_visitor_experience: "Visitor Experience",
    kicker: "Visitor Experience",
    title: "Visitor Essentials",
    lead: "Plan your visit with opening information, accessibility guidance, and practical details for exploring the Da Bao'en Temple site.",
    button_timeline: "Start at Timeline",
    quick_name: "Nanjing Da Bao'en Temple",
    quick_meta: "4.6/5 · 520 reviews",
    quick_hours_label: "Hours:",
    quick_hours_value: "08:30-19:30",
    quick_address_label: "Address:",
    quick_address_value: "No. 1 Bao'en Street, Qinhuai District, Nanjing",
    quick_book: "Book",
    panel_1_title: "Opening Information",
    panel_1_copy:
      "Da Bao'en Temple Ruins Scenic Area is usually open Monday to Sunday from 08:30 to 19:30, with ticket checking typically ending at 19:00 or 19:15. Visitors are encouraged to arrive earlier for a fuller experience of the site, exhibitions, and pagoda area.",
    panel_2_title: "Map",
    panel_3_title: "Accessibility",
    panel_3_copy:
      "The site offers basic accessible visiting conditions and is generally suitable for elderly visitors, wheelchair users, visitors using mobility aids, and families with strollers. Public transport and metro connections are available nearby, but metro exits usually still require some walking, so buses or direct taxi and ride-hailing drop-off are recommended for visitors with reduced mobility. Visitors with disabilities and adults aged 70 and above may enter free with valid identification. For barrier-free entrances, wheelchair borrowing, accessible restrooms, elevator access, and priority entry arrangements, it is best to confirm details in advance by calling the visitor center at 025-52009999.",
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
    lead: "在这里可以快速了解大报恩寺的开放时间、无障碍提示与实用参观信息，帮助你更顺畅地规划行程。",
    button_timeline: "从时间线开始",
    quick_name: "南京大报恩寺",
    quick_meta: "4.6/5 · 520 条评价",
    quick_hours_label: "开放时间：",
    quick_hours_value: "08:30-19:30",
    quick_address_label: "地址：",
    quick_address_value: "南京市秦淮区报恩街 1 号",
    quick_book: "预约",
    panel_1_title: "开放信息",
    panel_1_copy:
      "南京大报恩寺遗址景区通常开放时间为周一至周日 8:30-19:30，19:00或19:15停止检票入园。建议游客尽量提前到达，以便有更充足的时间参观遗址、展陈空间与宝塔区域。如遇节假日、特殊活动或临时调整，请以景区当日公告为准。",
    panel_2_title: "地图",
    panel_3_title: "无障碍说明",
    panel_3_copy:
      "景区整体具备基础无障碍参观条件，对老年游客、轮椅使用者、助行器使用者以及携带婴儿车的家庭较为友好。景区周边可通过地铁及公交到达，但地铁出站后通常仍需步行一段距离，如有行动不便情况，建议优先选择公交接驳或出租车、网约车直达景区入口。残疾人凭有效身份证件可享免费入园，70周岁及以上老年人凭有效身份证件亦可免费入园。关于无障碍入口、轮椅借用、无障碍卫生间、电梯覆盖范围及优先检票通道等具体设施，建议行前拨打游客中心电话 025-52009999 进行确认。",
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
