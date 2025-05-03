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
    const radius = 320;
    const centerX = 250;
    const centerY = 300;

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

// Sliding Information
const word1 = document.getElementById("word1-btn");
const word2 = document.getElementById("word2-btn");
const word3 = document.getElementById("word3-btn");
const word4 = document.getElementById("word4-btn");
const word5 = document.getElementById("word5-btn");

word1.addEventListener("click", () => {
    const word1Elements = document.querySelectorAll(".word1");

    word1Elements.forEach((el) => {
        if (el.style.marginLeft !== "0px") {
            el.style.marginLeft = "0px";
            el.style.marginRight = "0px";
        } else {
            if (el.classList.contains("word-quote")) {
                el.style.marginLeft = "-400px";
                el.style.marginRight = "400px";
            } else {
                el.style.marginLeft = "400px";
                el.style.marginRight = "-400px";
            }
        }
    });
});

word2.addEventListener("click", () => {
    const word2Elements = document.querySelectorAll(".word2");

    word2Elements.forEach((el) => {
        if (el.style.marginLeft !== "0px") {
            el.style.marginLeft = "0px";
            el.style.marginRight = "0px";
        } else {
            if (el.classList.contains("word-quote")) {
                el.style.marginLeft = "-400px";
                el.style.marginRight = "400px";
            } else {
                el.style.marginLeft = "400px";
                el.style.marginRight = "-400px";
            }
        }
    });
});

word3.addEventListener("click", () => {
    const word3Elements = document.querySelectorAll(".word3");

    word3Elements.forEach((el) => {
        if (el.style.marginLeft !== "0px") {
            el.style.marginLeft = "0px";
            el.style.marginRight = "0px";
        } else {
            if (el.classList.contains("word-quote")) {
                el.style.marginLeft = "-400px";
                el.style.marginRight = "400px";
            } else {
                el.style.marginLeft = "400px";
                el.style.marginRight = "-400px";
            }
        }
    });
});

word4.addEventListener("click", () => {
    const word4Elements = document.querySelectorAll(".word4");

    word4Elements.forEach((el) => {
        if (el.style.marginLeft !== "0px") {
            el.style.marginLeft = "0px";
            el.style.marginRight = "0px";
        } else {
            if (el.classList.contains("word-quote")) {
                el.style.marginLeft = "-400px";
                el.style.marginRight = "400px";
            } else {
                el.style.marginLeft = "400px";
                el.style.marginRight = "-400px";
            }
        }
    });
});

word5.addEventListener("click", () => {
    const word5Elements = document.querySelectorAll(".word5");

    word5Elements.forEach((el) => {
        if (el.style.marginLeft !== "0px") {
            el.style.marginLeft = "0px";
            el.style.marginRight = "0px";
        } else {
            if (el.classList.contains("word-quote")) {
                el.style.marginLeft = "-400px";
                el.style.marginRight = "400px";
            } else {
                el.style.marginLeft = "400px";
                el.style.marginRight = "-400px";
            }
        }
    });
});

// Slide Animations
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelectorAll('.pic-right, .pic-left').forEach(el => {
        const rect = el.getBoundingClientRect();
        const trigger = window.innerHeight * 0.8;
        
        if (rect.top < trigger) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
});

