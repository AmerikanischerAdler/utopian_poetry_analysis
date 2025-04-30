// Blur Animation
document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.querySelector('.scroll-btn');
    const heroContent = document.querySelector('.hero-content');

    scrollBtn.addEventListener('mouseenter', () => {
        heroContent.classList.add('remove-blur');
    });

    scrollBtn.addEventListener('mouseleave', () => {
        heroContent.classList.remove('remove-blur');
    });
});

// Scrolling
function scrollToTarget(target, duration = 1000) {
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      scrollToTarget(target, 1000); 
    }
  });
});

// Tree Animation
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.word-card');
  const radius = 300;
  const centerX = 300;
  const centerY = 0;

  cards.forEach((card, i) => {
    const angle = Math.PI * (i / (cards.length - 1));
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    card.style.left = `${x}px`;
    card.style.top = `${y}px`;
  });

  const trigger = document.querySelector('.word-cards-trigger');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'scale(1)';
          }, index * 200);
        });
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(trigger);
});

