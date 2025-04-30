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

