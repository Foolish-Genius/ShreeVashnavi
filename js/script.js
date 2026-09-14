document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      const target = targetId ? document.querySelector(targetId) : null;

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = contactForm.querySelector('button[type="submit"]');
      const status = contactForm.querySelector('.form-status');
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Demo Request Received';
        button.disabled = true;
        if (status) {
          status.textContent = 'Thank you. We will contact you shortly. Your accounting guide is ready to download.';
        }

        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
          contactForm.reset();
        }, 2000);
      }
    });
  }

  document.querySelectorAll('[data-tabs]').forEach((tabGroup) => {
    const buttons = tabGroup.querySelectorAll('[data-tab]');
    const panels = tabGroup.querySelectorAll('.tab-panel');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const targetId = button.dataset.tab;
        buttons.forEach((tab) => {
          const selected = tab === button;
          tab.classList.toggle('active', selected);
          tab.setAttribute('aria-selected', String(selected));
        });
        panels.forEach((panel) => {
          const selected = panel.id === targetId;
          panel.classList.toggle('active', selected);
          panel.hidden = !selected;
        });
      });
    });
  });
});
