// Show popup on page load
window.onload = function() {
  document.getElementById("popupForm").classList.add("show");
};

// Close popup
function closePopup() {
  document.getElementById("popupForm").classList.remove("show");
}
// JS for scroll trigger
document.addEventListener("DOMContentLoaded", () => {
  const subtitle = document.querySelector(".about-subtitle");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        subtitle.classList.add("visible");
        observer.unobserve(subtitle); // run once
      }
    });
  }, { threshold: 0.5 });

  observer.observe(subtitle);
});
// Add random animation delay + duration for tags
const tags = document.querySelectorAll(".tag");

tags.forEach(tag => {
  const delay = Math.random() * 4; 
  const duration = 4 + Math.random() * 3; 
  tag.style.animationDelay = `${delay}s`;
  tag.style.animationDuration = `${duration}s`;
});
document.addEventListener("DOMContentLoaded", function() {
  const navbarCollapse = document.getElementById("navbarNav");
  const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse, { toggle: false });

  // Close menu on link click
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => bsCollapse.hide());
  });

  // Close menu on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.navbar') && navbarCollapse.classList.contains('show')) {
      bsCollapse.hide();
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.getElementById("navbarNav");
  
  // Close menu on nav link click
  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });

  // Close menu on outside click
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".navbar") && navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});
