import './style.css'

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll to sections
  const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href');
      
      if (target && target.startsWith('#')) {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all cards
  const cards = document.querySelectorAll('.skill-card, .project-card');
  cards.forEach(card => {
    observer.observe(card);
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop - 100;
      const sectionHeight = (section as HTMLElement).offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll);

  // Add typing effect to hero title
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.textContent || '';
    heroTitle.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    
    setTimeout(typeWriter, 300);
  }

  // Add hover effect for project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Log welcome message
  console.log('%c김가현 포트폴리오', 'font-size: 20px; font-weight: bold; color: #CC785C;');
  console.log('%c개발 공부 중인 기술교사입니다 👋', 'font-size: 14px; color: #5A5347;');
});

// Add fade-in animation class
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .nav-link.active {
    color: var(--color-primary);
  }
  
  .nav-link.active::after {
    width: 100%;
  }
`;
document.head.appendChild(style);

export {};
