import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';

import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/source-sans-3/400.css';
import '@fontsource/source-sans-3/700.css';
/**
 * Import dependencies from node_modules
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

// Form validation feedback
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});