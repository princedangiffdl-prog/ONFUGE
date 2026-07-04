// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Active link highlighting on scroll
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const setActiveLink = () => {
  let currentId = sections[0]?.id;
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    if (section.offsetTop <= scrollPos) {
      currentId = section.id;
    }
  });

  navAnchors.forEach(anchor => {
    anchor.classList.toggle('active', anchor.getAttribute('href') === `#${currentId}`);
  });
};

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

// Contact form handling (client-side only demo)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    status.textContent = 'Please fill in the required fields.';
    status.style.color = '#f08c4f';
    return;
  }

  const name = document.getElementById('name').value.trim();
  status.textContent = `Thanks, ${name}! We'll get back to you within one business day.`;
  status.style.color = '#7fd3a3';
  form.reset();
});
