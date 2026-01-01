document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const overlay = document.querySelector('.nav-overlay');
    const headerHeight = document.querySelector('.site-header').offsetHeight;

    // Helper to close menu
    const closeMenu = () => {
        navToggle.checked = false;
    };

    // Close menu when clicking links or overlay
    navLinks.forEach(link => link.addEventListener('click', closeMenu));
    overlay.addEventListener('click', closeMenu);

    // Smooth Scroll with Offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Link Highlighting on Scroll
    window.addEventListener('scroll', () => {
        let current = "";
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - headerHeight - 10) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});


  // Example toast function (replace with your UI logic)
  function showToast(msg, type) {
    alert(`${type.toUpperCase()}: ${msg}`);
  }
    // Show toast notification
    function showToast(message, type) {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.className = 'toast ' + type;

      // Hide toast after 3 seconds
      setTimeout(() => {
        toast.className = 'toast';
      }, 3000);
    }
  

document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Logic
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
                
                // Trigger skill bars if the element is the skills section
                if (el.id === 'skills') {
                    const bars = el.querySelectorAll('.bar i');
                    bars.forEach(bar => {
                        bar.style.width = bar.getAttribute('data-width') + '%';
                    });
                }
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Run once on load

    // 2. Terminal Typing Simulation (Optional Flair)
    const lines = document.querySelectorAll('.term .line');
    lines.forEach((line, index) => {
        line.style.opacity = '0';
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transition = 'opacity 0.5s ease';
        }, (index + 1) * 600);
    });
});


  (function() {
    // Initialize EmailJS with your User ID
    emailjs.init("a4ilD7xDhK5mC58NI"); 
  })();


// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  const contactForm = document.getElementById('contact-form');

  // Check if the form exists before adding listener
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      // Show loading state
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      try {
        const serviceID = 'service_rpd8y7c';
        const templateID = 'template_hwgtkri';

        await emailjs.send(serviceID, templateID, {
          name: name,
          email: email,
          subject: subject,
          message: message,
          to_email: 'gokukrishna.18@gmail.com'
        });

        showToast('Message sent successfully!', 'success');
        this.reset();
      } catch (error) {
        console.error('Failed to send message:', error);
        showToast('Failed to send message. Please try again later.', 'error');
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  } else {
    console.error("Error: Element with ID 'contact-form' not found.");
  }
});

// Toast function remains outside
function showToast(message, type) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.className = 'toast show ' + type;
  setTimeout(() => { toast.className = 'toast'; }, 3000);
}