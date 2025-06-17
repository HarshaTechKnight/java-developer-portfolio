document.addEventListener('DOMContentLoaded', function() {
    // Highlight active navigation item on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Close mobile menu when clicking a nav item
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
    
    // Add smooth scroll offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Typed.js animation for the headline
    if (document.getElementById('typed')) {
        const typed = new Typed('#typed', {
            strings: [
                'Java Developer',
                'Spring Boot Expert',
                'Backend Specialist',
                'Problem Solver',
                'Software Engineer'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.hero-content, .hero-image-container');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    };

    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Parallax effect for shapes
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.2 + (index * 0.1);
            const yPos = -(scrollPosition * speed);
            shape.style.transform = `translateY(${yPos}px)`;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // Typed.js animation for the about section
  if (document.getElementById('about-typed')) {
    const typed = new Typed('#about-typed', {
      strings: [
        'Problem Solving',
        'Clean Architecture',
        'Technical Leadership',
        'Optimized Solutions'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  // Animate elements on scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.about-image-container, .about-content');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animate__animated', 'animate__fadeIn');
      }
    });
  };

  // Initial check
  animateOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', animateOnScroll);

  // Make tech badges interactive
  const techBadges = document.querySelectorAll('.tech-badge');
  
  techBadges.forEach(badge => {
    badge.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1) rotate(10deg)';
    });
    
    badge.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Typed.js animation for skills section
  if (document.getElementById('skills-typed')) {
    const typed = new Typed('#skills-typed', {
      strings: [
        'Efficient Solutions',
        'Scalable Architecture',
        'Clean Code',
        'Robust Systems'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  // Animate progress bars when section comes into view
  const animateProgressBars = function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    const skillsSection = document.querySelector('.skills-section');
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
      progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
    }
  };

  // Initial check
  animateProgressBars();
  
  // Check on scroll
  window.addEventListener('scroll', animateProgressBars);

  // Animate additional skills on hover
  const additionalSkills = document.querySelectorAll('.additional-skill');
  
  additionalSkills.forEach(skill => {
    skill.addEventListener('mouseenter', function() {
      const skillName = this.getAttribute('data-skill');
      this.innerHTML = `<i class="${this.querySelector('i').className}"></i><span>${skillName}</span>`;
    });
    
    skill.addEventListener('mouseleave', function() {
      const skillName = this.getAttribute('data-skill');
      this.innerHTML = `<i class="${this.querySelector('i').className}"></i><span>${skillName}</span>`;
    });
  });

  // Animate elements on scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.skill-item, .skills-additional');
    
    elements.forEach((element, index) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.animationDelay = `${index * 0.1}s`;
        element.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  };

  // Initial check
  animateOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', animateOnScroll);
});

document.addEventListener('DOMContentLoaded', function() {
  // Typed.js animation for experience section
  if (document.getElementById('experience-typed')) {
    const typed = new Typed('#experience-typed', {
      strings: [
        'Optimizing Performance',
        'Leading Transformations',
        'Driving Innovation',
        'Delivering Impact'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  // Animate timeline items on scroll
  const animateTimeline = function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
      const itemPosition = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (itemPosition < windowHeight - 100) {
        item.style.transitionDelay = `${index * 0.1}s`;
        item.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  };

  // Initial check
  animateTimeline();
  
  // Check on scroll
  window.addEventListener('scroll', animateTimeline);

  // Animate milestones on scroll
  const animateMilestones = function() {
    const milestones = document.querySelectorAll('.milestone');
    const milestonesSection = document.querySelector('.milestones');
    const sectionPosition = milestonesSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
      milestones.forEach((milestone, index) => {
        milestone.style.transitionDelay = `${index * 0.1}s`;
        milestone.classList.add('animate__animated', 'animate__zoomIn');
      });
    }
  };

  // Initial check
  animateMilestones();
  
  // Check on scroll
  window.addEventListener('scroll', animateMilestones);
});

document.addEventListener('DOMContentLoaded', function() {
  // Typed.js animation for portfolio section
  if (document.getElementById('portfolio-typed')) {
    const typed = new Typed('#portfolio-typed', {
      strings: [
        'Deliver Impact',
        'Solve Problems',
        'Push Boundaries',
        'Create Value'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  // Portfolio filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category').includes(filterValue)) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Animate portfolio items on scroll
  const animatePortfolioItems = function() {
    const items = document.querySelectorAll('.portfolio-item');
    
    items.forEach((item, index) => {
      const itemPosition = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (itemPosition < windowHeight - 100) {
        item.style.transitionDelay = `${index * 0.1}s`;
        item.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  };

  // Initial check
  animatePortfolioItems();
  
  // Check on scroll
  window.addEventListener('scroll', animatePortfolioItems);
});

document.addEventListener('DOMContentLoaded', function() {
  // Typed.js animation for resume section
  if (document.getElementById('resume-typed')) {
    const typed = new Typed('#resume-typed', {
      strings: [
        'Java Expertise',
        'Spring Boot Solutions',
        'Cloud Architecture',
        'Full-Stack Skills'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  // Animate document card on scroll
  const animateDocumentCard = function() {
    const documentCard = document.querySelector('.document-card');
    const cardPosition = documentCard.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (cardPosition < windowHeight - 100) {
      documentCard.classList.add('animate__animated', 'animate__fadeInRight');
    }
  };

  // Initial check
  animateDocumentCard();
  
  // Check on scroll
  window.addEventListener('scroll', animateDocumentCard);

  // Add download tracking
  const downloadBtn = document.querySelector('.btn-primary');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
      // You can add analytics tracking here
      console.log('Resume downloaded');
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Typed.js animation for contact section
  if (document.getElementById('contact-typed')) {
    const typed = new Typed('#contact-typed', {
      strings: [
        'Collaborate',
        'Create Solutions',
        'Discuss Ideas',
        'Build The Future'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  // Form submission handling
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Here you would typically send the form data to a server
      console.log('Form submitted:', { name, email, subject, message });
      
      // Show success message
      alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
      
      // Reset form
      contactForm.reset();
    });
  }

  // Animate elements on scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.contact-form-wrapper, .contact-info-card');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  };

  // Initial check
  animateOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', animateOnScroll);
});

document.addEventListener('DOMContentLoaded', function() {
  // Update copyright year automatically
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth scroll for back to top button
  const backToTopButton = document.querySelector('.back-to-top');
  if (backToTopButton) {
    backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Show/hide back to top button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.style.opacity = '1';
      backToTopButton.style.visibility = 'visible';
    } else {
      backToTopButton.style.opacity = '0';
      backToTopButton.style.visibility = 'hidden';
    }
  });

  // Initialize back to top button state
  backToTopButton.style.opacity = '0';
  backToTopButton.style.visibility = 'hidden';
  backToTopButton.style.transition = 'all 0.3s ease';
});