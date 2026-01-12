// Simple accordion behavior
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click", () => {
    // close others (optional)
    faqItems.forEach((other) => {
      if (other !== item) other.classList.remove("active");
    });

    // toggle this one
    item.classList.toggle("active");
  });
});
