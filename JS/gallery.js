// Simple lightbox for gallery images
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("lightboxClose");

document.querySelectorAll("a.lb").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const imgSrc = link.getAttribute("href");
    const imgAlt = link.querySelector("img")?.alt || "Expanded photo";
    lightboxImg.src = imgSrc;
    lightboxImg.alt = imgAlt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}

closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("open"))
    closeLightbox();
});
