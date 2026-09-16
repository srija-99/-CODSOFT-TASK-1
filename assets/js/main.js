document.addEventListener('DOMContentLoaded', () => {

    /* ==================== MOBILE NAVIGATION DRAWER ==================== */
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
  
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }
  
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }
  
    // Close Mobile Menu when selecting any link
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    });
  
    /* ==================== HEADER GLASS SHADOW ON SCROLL ==================== */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  
    /* ==================== ACTIVE LINK HIGHLIGHT ON SCROLL ==================== */
    const sections = document.querySelectorAll('section[id]');
  
    const scrollActive = () => {
      const scrollY = window.pageYOffset;
  
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav__menu a[href*='${sectionId}']`);
  
        if (navLink) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link');
          } else {
            navLink.classList.remove('active-link');
          }
        }
      });
    };
  
    window.addEventListener('scroll', scrollActive);
  
    /* ==================== DYNAMIC FOOTER YEAR ==================== */
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  
    /* ==================== CONTACT FORM VALIDATION ==================== */
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
  
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formStatus = document.getElementById('formStatus');
  
    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(String(email).toLowerCase());
    };
  
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
  
        let valid = true;
  
        // Reset previous error messages
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        formStatus.textContent = '';
        formStatus.className = 'form-status';
  
        // Name Validation
        if (nameInput.value.trim() === '') {
          nameError.textContent = 'Please enter your name.';
          valid = false;
        }
  
        // Email Validation
        if (emailInput.value.trim() === '') {
          emailError.textContent = 'Please enter your email address.';
          valid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
          emailError.textContent = 'Please enter a valid email address.';
          valid = false;
        }
  
        // Message Validation
        if (messageInput.value.trim() === '') {
          messageError.textContent = 'Please enter a message.';
          valid = false;
        }
  
        // Form submission handling
        if (valid) {
          formStatus.textContent = 'Thank you, Srijita has received your message and will reply soon!';
          formStatus.classList.add('success');
          contactForm.reset();
        } else {
          formStatus.textContent = 'Please correct the error fields above and try again.';
          formStatus.classList.add('error');
        }
      });
    }
  });