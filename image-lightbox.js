const lightboxImages = document.querySelectorAll(".interactive-image, [data-lightbox-src]");

if (lightboxImages.length) {
  const lightbox = document.createElement("div");
  lightbox.className = "image-lightbox";
  lightbox.hidden = true;
  lightbox.innerHTML = `
    <div class="image-lightbox-backdrop" aria-hidden="true"></div>
    <div class="image-lightbox-content" role="dialog" aria-modal="true" aria-label="Image viewer">
      <button class="image-lightbox-close" type="button" aria-label="Close image viewer">Close</button>
      <img class="image-lightbox-image" alt="" />
      <div class="image-lightbox-panel" hidden>
        <p class="image-lightbox-title"></p>
        <p class="image-lightbox-description"></p>
      </div>
    </div>
  `;

  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector(".image-lightbox-image");
  const closeButton = lightbox.querySelector(".image-lightbox-close");
  const backdrop = lightbox.querySelector(".image-lightbox-backdrop");
  const panel = lightbox.querySelector(".image-lightbox-panel");
  const title = lightbox.querySelector(".image-lightbox-title");
  const description = lightbox.querySelector(".image-lightbox-description");

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImage.removeAttribute("src");
    lightboxImage.alt = "";
    panel.hidden = true;
    title.textContent = "";
    description.textContent = "";
  }

  lightboxImages.forEach((image) => {
    image.addEventListener("click", () => {
      lightboxImage.src = image.dataset.lightboxSrc || image.currentSrc || image.src;
      lightboxImage.alt = image.dataset.lightboxAlt || image.alt || "";
      title.textContent = image.dataset.lightboxTitle || "";
      description.textContent = image.dataset.lightboxDescription || "";
      panel.hidden = !title.textContent && !description.textContent;
      lightbox.hidden = false;
    });
  });

  closeButton.addEventListener("click", closeLightbox);
  backdrop.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
}
