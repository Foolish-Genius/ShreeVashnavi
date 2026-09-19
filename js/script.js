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

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    console.log('FORM SUBMIT EVENT FIRED');

    const formData = new FormData(contactForm);

    console.log('FORM DATA:');
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      console.log('SENDING TO:', contactForm.action);

      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      console.log('FORMSPREE STATUS:', response.status);

      const result = await response.json();

      console.log('FORMSPREE RESPONSE:', result);

      if (response.ok) {
        console.log('SUCCESS');

        const button = contactForm.querySelector(
          'button[type="submit"]'
        );

        const status = contactForm.querySelector('.form-status');

        if (button) {
          button.textContent = 'Demo Request Received';
        }

        if (status) {
          status.textContent =
            'Thank you. We will contact you shortly.';
        }

        contactForm.reset();

      } else {
        console.error('FORMSPREE ERROR:', result);

        const status = contactForm.querySelector('.form-status');

        if (status) {
          status.textContent =
            result.errors?.map(error => error.message).join(', ') ||
            'Form submission failed.';
        }
      }

    } catch (error) {
      console.error('FETCH ERROR:', error);

      const status = contactForm.querySelector('.form-status');

      if (status) {
        status.textContent =
          'Unable to submit the form. Please try again.';
      }
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
