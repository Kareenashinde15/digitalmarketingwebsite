// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    const open = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open');
  });
  // close on link click (mobile)
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }));
}

// Active nav link on scroll
const sections = document.querySelectorAll('main, section');
const links = document.querySelectorAll('.nav-link');
const map = {};
sections.forEach(s => map['#'+s.id] = s);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = '#'+entry.target.id;
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });

sections.forEach(s => observer.observe(s));

// FAQ accordion
document.querySelectorAll('.accordion .item').forEach(item => {
  const btn = item.querySelector('.item-head');
  btn.addEventListener('click', () => item.classList.toggle('open'));
});

// Contact form (front‑end only)
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valid = form.checkValidity();
    if (!valid) {
      msg.textContent = "Please fill all required fields correctly.";
      msg.style.color = "#b91c1c";
      return;
    }
    // Simulate success
    msg.textContent = "Thanks! We'll be in touch within 24 hours.";
    msg.style.color = "#065f46";
    form.reset();
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
