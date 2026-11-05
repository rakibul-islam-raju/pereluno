const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  nav.classList.toggle('open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
  });
});

const navLinks = [...nav.querySelectorAll('a')];
const targets = navLinks.map((link) => document.querySelector(link.getAttribute('href')));
function updateActiveLink() {
  const marker = window.scrollY + Math.min(window.innerHeight * 0.25, 140);
  let current = 'home';
  targets.forEach((target) => {
    if (target.offsetTop <= marker) current = target.id;
  });
  navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
}
window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();
