// 🌙 Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const currentTheme = document.body.classList.contains("light-theme") ? "light" : "dark";
  localStorage.setItem("theme", currentTheme);
});

// 🧠 Load Theme from Local Storage
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
  }
});

// 🎯 Scroll Reveal Animation
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animate once
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => observer.observe(section));

// ✨ Skill Icon Hover Effect (Optional JS-enhanced if needed)
document.querySelectorAll(".skill-grid img").forEach((icon) => {
  icon.addEventListener("mouseenter", () => icon.classList.add("scale-up"));
  icon.addEventListener("mouseleave", () => icon.classList.remove("scale-up"));
});

// 📜 Smooth Scrolling (for anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
