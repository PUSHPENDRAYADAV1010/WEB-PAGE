// =====================================================
// PORTFOLIO JAVASCRIPT
// =====================================================

// Small page-load effect
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

// Smooth navigation feedback
const links = document.querySelectorAll(".navbar nav a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});
