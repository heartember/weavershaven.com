// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});

// Smooth scroll with offset for header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler
const subscribeForm = document.getElementById('subscribeForm');
const formMessage = document.getElementById('formMessage');

subscribeForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };
    
    // Show loading state
    const submitButton = subscribeForm.querySelector('.submit-button');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Subscribing...';
    submitButton.disabled = true;
    
    // Simulate API call (replace with actual email service integration)
    try {
        // This is where you would integrate with an email service like:
        // - Mailchimp
        // - ConvertKit
        // - Buttondown
        // - Substack
        // Example: await fetch('YOUR_EMAIL_SERVICE_API', {...})
        
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
        
        // Show success message
        formMessage.textContent = `Thank you, ${formData.name}! You've been added to the mailing list.`;
        formMessage.className = 'form-message success';
        
        // Reset form
        subscribeForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
        
    } catch (error) {
        // Show error message
        formMessage.textContent = 'Oops! Something went wrong. Please try again or email me directly.';
        formMessage.className = 'form-message error';
    } finally {
        // Reset button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }
});

// Add scroll-based animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe lesson cards and gallery items
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.lesson-card, .gallery-item');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Add parallax effect to hero background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero');
    if (heroSection && scrolled < window.innerHeight) {
        heroSection.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});
