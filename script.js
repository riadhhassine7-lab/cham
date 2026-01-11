// ========================================
// SMOOTH SCROLLING
// ========================================

document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elements to animate on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .experience-card, .testimonial-card, .process-step');
    
    elements.forEach((el, index) => {
        el.classList.add('scroll-reveal');
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
};

// ========================================
// FORM HANDLING
// ========================================

const leadForm = document.getElementById('leadForm');

if (leadForm) {
    leadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(leadForm);
        const data = {};
        
        // Convert FormData to object
        for (let [key, value] of formData.entries()) {
            if (key === 'tripType') {
                if (!data[key]) {
                    data[key] = [];
                }
                data[key].push(value);
            } else {
                data[key] = value;
            }
        }
        
        // Log form data (in production, send to server)
        console.log('Form Data:', data);
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        leadForm.reset();
    });
}

function showSuccessMessage() {
    // Create success modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: fadeIn 0.3s ease-out;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 3rem;
        border-radius: 1.5rem;
        max-width: 500px;
        margin: 0 1rem;
        text-align: center;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        animation: slideUp 0.3s ease-out;
    `;
    
    modalContent.innerHTML = `
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" style="margin: 0 auto 1.5rem;">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <h2 style="font-size: 1.75rem; font-weight: 700; color: #1c1917; margin-bottom: 1rem;">Merci pour votre demande !</h2>
        <p style="color: #57534e; line-height: 1.7; margin-bottom: 2rem;">
            Nous avons bien reçu votre projet de voyage. Notre équipe vous contactera sous 24 à 48 heures avec une proposition personnalisée.
        </p>
        <button id="closeModal" style="
            padding: 0.875rem 2rem;
            background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
            color: white;
            border: none;
            border-radius: 0.75rem;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            box-shadow: 0 4px 14px 0 rgba(249, 115, 22, 0.35);
            transition: all 0.3s ease;
        ">
            Parfait !
        </button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Close modal
    const closeButton = document.getElementById('closeModal');
    closeButton.addEventListener('click', () => {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        }
    });
}

// ========================================
// ADD HOVER EFFECTS TO BUTTONS
// ========================================

const addButtonEffects = () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
};

// ========================================
// PARALLAX EFFECT ON HERO
// ========================================

const addParallaxEffect = () => {
    const hero = document.querySelector('.hero-background');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
};

// ========================================
// FORM FIELD ANIMATIONS
// ========================================

const addFormAnimations = () => {
    const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.transition = 'transform 0.3s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
};

// ========================================
// TESTIMONIALS CARD STAGGER ANIMATION
// ========================================

const staggerTestimonials = () => {
    const testimonials = document.querySelectorAll('.testimonial-card');
    
    testimonials.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
};

// ========================================
// SCROLL TO TOP BUTTON (Optional)
// ========================================

const addScrollToTop = () => {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
    `;
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 56px;
        height: 56px;
        background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 25px rgba(249, 115, 22, 0.3);
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollButton);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.05)';
        this.style.boxShadow = '0 15px 30px rgba(249, 115, 22, 0.4)';
    });
    
    scrollButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 25px rgba(249, 115, 22, 0.3)';
    });
};

// ========================================
// LOADING ANIMATION
// ========================================

const addLoadingAnimation = () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
};

// ========================================
// INITIALIZE ALL FEATURES
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    animateOnScroll();
    addButtonEffects();
    addParallaxEffect();
    addFormAnimations();
    staggerTestimonials();
    addScrollToTop();
    addLoadingAnimation();
    
    console.log('🏜️ Vacances Dunes & Mer - Landing page initialized!');
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
