// Toggle mobile navigation menu
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('active');
});

// Smooth scroll for internal links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target?.scrollIntoView({behavior: 'smooth', block: 'start'});
    
    // Close menu on mobile after click
    if(navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', false);
    }
  });
});

// Form submission with validation feedback
function enviarFormulario() {
  const form = document.getElementById('contactForm');
  if (!form.checkValidity()) {
    alert('Por favor, preencha todos os campos corretamente.');
    return false;
  }
  alert('Obrigado pelo contato! Responderemos em breve.');
  form.reset();
  return false; // Prevent page reload
}
