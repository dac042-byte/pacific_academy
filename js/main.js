// Carousel Functionality
const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
const prevBtn = document.querySelector('.carousel-arrow.prev');
const nextBtn = document.querySelector('.carousel-arrow.next');

let currentSlide = 0;
const totalSlides = slides.length;

function goToSlide(n) {
    currentSlide = (n + totalSlides) % totalSlides;
    carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
});

// Auto-advance carousel every 5 seconds
let carouselInterval = setInterval(nextSlide, 5000);

// Pause auto-advance on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => {
    clearInterval(carouselInterval);
});

carousel.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(nextSlide, 5000);
});

// Language Switcher Functionality
const languageBtns = document.querySelectorAll('.language-btn');
let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;

    // Update active button
    languageBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all text elements with translations
    const elements = document.querySelectorAll('[data-lang-' + lang + ']');
    elements.forEach(element => {
        const translation = element.getAttribute('data-lang-' + lang);
        if (translation) {
            element.textContent = translation;
        }
    });
}

languageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        switchLanguage(btn.dataset.lang);
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Keyboard navigation for carousel
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Add animate-on-scroll class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.vision-mission-card, .admissions-stat, .calendar-event, .testimonial-card, .section-title, .section-subtitle');

    animateElements.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Parallax effect for carousel
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const carouselImages = document.querySelectorAll('.carousel-image');
    carouselImages.forEach(img => {
        if (scrolled < 600) {
            img.style.transform = `translateY(${scrolled * 0.5}px) scale(${1 + scrolled * 0.0002})`;
        }
    });
});

// Counter animation for admissions stats
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            if (target.toString().includes('%')) {
                element.textContent = Math.floor(current) + '%';
            } else if (target.toString().includes('M')) {
                element.textContent = '$' + (current / 1000000).toFixed(1) + 'M';
            } else {
                element.textContent = Math.floor(current);
            }
        }
    }, 16);
}

// Observe admission stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const numberEl = entry.target.querySelector('.admissions-stat-number');
            const text = numberEl.textContent;
            entry.target.dataset.animated = 'true';

            if (text.includes('%')) {
                const num = parseInt(text);
                numberEl.textContent = '0%';
                animateCounter(numberEl, num + '%', 2000);
            } else if (text.includes('M')) {
                numberEl.textContent = '$0M';
                animateCounter(numberEl, '2.5M', 2000);
            } else {
                const num = parseInt(text);
                numberEl.textContent = '0';
                setTimeout(() => animateCounter(numberEl, num, 2000), 200);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.admissions-stat').forEach(stat => {
    statsObserver.observe(stat);
});
