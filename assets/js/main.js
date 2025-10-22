// ============================================
// LANGUAGE SWITCHING
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Check for language parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');

    // If lang parameter is present, redirect to appropriate page
    if (langParam) {
        if (langParam === 'en' && !window.location.pathname.includes('english_page')) {
            window.location.href = 'english_page.html?lang=en';
        } else if (langParam === 'pt' && window.location.pathname.includes('english_page')) {
            window.location.href = 'index.html?lang=pt';
        }
    }

    // Initialize smooth scroll behavior
    initSmoothScroll();

    // Initialize animations on scroll
    initScrollAnimations();

    // Initialize WhatsApp CTA
    initWhatsAppCTA();
});

// ============================================
// SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link is a local anchor
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Smooth scroll to target
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Close mobile menu if open (if implemented)
                    closeMobileMenu();
                }
            }
        });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    // Observe elements for fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all project cards, service cards, and testimonial cards
    const elementsToObserve = document.querySelectorAll(
        '.project-card, .service-card, .testimonial-card, .skill-item'
    );

    elementsToObserve.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// ============================================
// WHATSAPP CTA FUNCTIONALITY
// ============================================

function initWhatsAppCTA() {
    // WhatsApp button is already configured in HTML with proper URLs
    // This function can be extended for additional tracking or analytics
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Optional: Track WhatsApp clicks for analytics
            trackEvent('WhatsApp Click', {
                text: this.textContent.trim(),
                url: this.href
            });
        });
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Close mobile menu (for future mobile menu implementation)
function closeMobileMenu() {
    // This function can be extended when mobile menu is implemented
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
}

// Track events for analytics (optional)
function trackEvent(eventName, eventData) {
    // This function can be connected to Google Analytics or other tracking service
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    // Fallback: log to console in development
    console.log('Event tracked:', eventName, eventData);
}

// ============================================
// NAVBAR ACTIVE LINK HIGHLIGHTING
// ============================================

document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// FORM VALIDATION (for future contact form)
// ============================================

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    // Brazilian phone format: +55 (XX) XXXXX-XXXX or similar variations
    const phoneRegex = /^(\+55)?[\s]?(\(?\d{2}\)?)?[\s]?9?[\s]?\d{4,5}[\s]?-?[\s]?\d{4}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images (if needed in future)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============================================
// DARK MODE TOGGLE (Optional Future Feature)
// ============================================

function initDarkModeToggle() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const htmlElement = document.documentElement;

    if (darkModeToggle) {
        // Check for saved preference
        const darkModePreference = localStorage.getItem('darkMode');
        if (darkModePreference === 'enabled') {
            htmlElement.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️';
        }

        darkModeToggle.addEventListener('click', function() {
            htmlElement.classList.toggle('dark-mode');
            const isDarkMode = htmlElement.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
            darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
        });
    }
}

// ============================================
// MOBILE MENU TOGGLE (Optional Future Feature)
// ============================================

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
}

// ============================================
// SCROLL TO TOP BUTTON (Optional Future Feature)
// ============================================

function initScrollToTopButton() {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ============================================
// INITIALIZE ALL FEATURES
// ============================================

// Uncomment these when implementing optional features
// initDarkModeToggle();
// initMobileMenu();
// initScrollToTopButton();

