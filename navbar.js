/* =========================
   HYROX DIY - navbar.js
   ========================= */

function initNavbar() {
  const toggle = document.querySelector('.navbar__toggle');
  const menu = document.querySelector('.navbar__menu');
  const links = document.querySelectorAll('.navbar__link');

  // Mobile toggle
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('is-open');
      toggle.classList.toggle('is-open');
    });

    // Close menu when clicking a link
    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle.classList.remove('is-open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('is-open');
        toggle.classList.remove('is-open');
      }
    });
  }

  // Set active link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const linkPage = link.getAttribute('href').replace('/', '');
    if (linkPage === currentPage || 
        (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Init on DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavbar);
} else {
  initNavbar();
}

