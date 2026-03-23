const ERA_CONTENT = {
  present: {
    kicker: "2015 to 2025",
    title: "Ruins Museum and Rebuilt Pagoda",
    pillars: ["Museum", "Archaeology", "Continuity"],
    summary:
      "The Grand Bao'en Temple Ruins Museum re-opened the historic ground as a hybrid of archaeological preservation, public interpretation, and contemporary memorial architecture.",
    significance:
      "This phase reframed the site as both ruin and cultural infrastructure. Instead of rebuilding the old temple exactly as it had been, the new complex preserves excavated remains, re-presents the underground palace, and makes the layered history legible to visitors.",
    architecture:
      "The rebuilt pagoda and museum architecture function as a contemporary vessel around historical traces. The design emphasizes procession, controlled light, and a measured dialogue between excavation, display, and vertical monumentality.",
    legacy:
      "Modern Bao'en Temple is less a simple reconstruction than an argument about how lost monuments can survive through curation, public memory, and archaeological continuity."
  },
  industrial: {
    kicker: "1856 to 1864",
    title: "Fire, War, and Collapse",
    pillars: ["Conflict", "Loss", "Fragments"],
    summary:
      "During the Taiping conflict, the temple complex and the celebrated glazed tower were destroyed, leaving fragments, memories, and documentary echoes in their place.",
    significance:
      "This period marks the break between the historic monument and its afterlife. What had once stood as an imperial and urban landmark became a site known through loss, ruin, and later historical reconstruction.",
    architecture:
      "The destruction erased the full vertical composition of the Ming pagoda, but it also transformed the architecture into an archaeological question. Later understanding of the monument depends on remains, texts, sketches, and excavated evidence.",
    legacy:
      "The collapse made the Porcelain Tower a global symbol of a vanished wonder. Its absence shaped how later generations imagined Nanjing, the Ming capital, and the fragility of cultural monuments in wartime."
  },
  medieval: {
    kicker: "15th to 19th century",
    title: "A Wonder Known Across the World",
    pillars: ["Fame", "Travel", "Image"],
    summary:
      "For centuries, the glazed pagoda of Nanjing stood as one of the city’s most visible landmarks and became famous far beyond China through travel writing and illustration.",
    significance:
      "This was the era in which Bao'en Temple moved from local monument to global image. Its fame shaped Western ideas of Chinese architecture and helped establish the Porcelain Tower as one of the most celebrated structures associated with Nanjing.",
    architecture:
      "The attraction lay in its vertical elegance, luminous glazed surfaces, and ceremonial prominence. The tower’s material brilliance and height made it exceptional not only as sacred architecture but also as urban spectacle.",
    legacy:
      "The monument’s reputation outlived the structure itself. Even after destruction, the image of the Porcelain Tower continued to circulate as a shorthand for lost splendor and imperial craftsmanship."
  },
  classical: {
    kicker: "1412 to 1431",
    title: "Yongle’s Imperial Reconstruction",
    pillars: ["Imperial", "Glazed Tower", "Ming Nanjing"],
    summary:
      "Under the Yongle Emperor, the Great Bao'en Temple was rebuilt at large scale in Nanjing, crowned by the famed nine-story glazed pagoda later called the Porcelain Tower.",
    significance:
      "This was the monument’s defining imperial phase. The reconstruction linked dynastic authority, Buddhist devotion, and the ceremonial importance of Nanjing into one monumental project.",
    architecture:
      "The rebuilt complex culminated in a tall glazed pagoda whose luminous surfaces and disciplined geometry distinguished it from ordinary masonry towers. It embodied both imperial investment and highly refined craftsmanship.",
    legacy:
      "Most later accounts of Bao'en Temple look back to this Ming phase as the monument’s canonical form. In historical memory, this is the moment that fixed the temple’s international identity."
  },
  ancient: {
    kicker: "1011 and 2008",
    title: "Song Crypt Beneath the Ming Temple",
    pillars: ["Underground Palace", "Reliquary", "Stratified Site"],
    summary:
      "Excavations in 2008 revealed the underground palace of the earlier Changgan Temple, including a Northern Song crypt dated to 1011 and an important reliquary assemblage.",
    significance:
      "This discovery pushed the site’s story beneath the visible Ming monument and reconnected Bao'en Temple to a deeper sacred topography. The history of the place is therefore stratified rather than singular.",
    architecture:
      "The underground palace is crucial because it records an earlier ritual and spatial order concealed below later construction. It reveals how dynastic rebuilding often absorbed and transformed older sacred foundations rather than replacing them completely.",
    legacy:
      "The archaeological finds gave the modern site its strongest material anchor. They made it possible to tell the story of Bao'en Temple not only as a lost wonder, but as a layered religious landscape with long continuity."
  }
};

const params = new URLSearchParams(window.location.search);
const eraId = params.get("era") || "medieval";
const era = ERA_CONTENT[eraId] || ERA_CONTENT.medieval;

document.title = `${era.title} | Da Bao'en Temple`;
document.body.style.setProperty("--era-accent", {
  present: "#8f7a49",
  industrial: "#6f8a8f",
  medieval: "#a98d5d",
  classical: "#d0a85a",
  ancient: "#b45b43"
}[eraId] || "#a98d5d");

document.querySelector("#era-kicker").textContent = era.kicker;
document.querySelector("#era-title").textContent = era.title;
document.querySelector("#era-summary").textContent = era.summary;
document.querySelector("#era-significance").textContent = era.significance;
document.querySelector("#era-architecture").textContent = era.architecture;
document.querySelector("#era-legacy").textContent = era.legacy;
document.querySelector("#era-pillar-1").textContent = era.pillars[0];
document.querySelector("#era-pillar-2").textContent = era.pillars[1];
document.querySelector("#era-pillar-3").textContent = era.pillars[2];

requestAnimationFrame(() => {
  document.querySelector("#era-layout").classList.add("entered");
});
