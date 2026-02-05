document.addEventListener('DOMContentLoaded', function() {

    // Set current year in footer
    var yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Smooth scroll with offset for header
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                var headerOffset = 80;
                var elementPosition = target.getBoundingClientRect().top;
                var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });

    // Form submission handler
    var subscribeForm = document.getElementById('subscribeForm');
    var formMessage = document.getElementById('formMessage');

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var nameVal = document.getElementById('name').value;
            var submitButton = subscribeForm.querySelector('.submit-button');
            var originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Subscribing...';
            submitButton.disabled = true;

            setTimeout(function() {
                formMessage.textContent = 'Thank you, ' + nameVal + '! You\'ve been added to the mailing list.';
                formMessage.className = 'form-message success';
                subscribeForm.reset();
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
                setTimeout(function() { formMessage.style.display = 'none'; }, 5000);
            }, 1500);
        });
    }

    // Scroll-based animations for lesson cards
    var observerOptions = { threshold: 0.2, rootMargin: '0px 0px -50px 0px' };
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.lesson-card').forEach(function(el, index) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease ' + (index * 0.1) + 's, transform 0.6s ease ' + (index * 0.1) + 's';
        observer.observe(el);
    });

    // Gallery Carousel
    var slides = document.querySelectorAll('.carousel-slide');
    var dotsContainer = document.querySelector('.carousel-dots');
    var prevBtn = document.querySelector('.carousel-btn.prev');
    var nextBtn = document.querySelector('.carousel-btn.next');
    var currentSlide = 0;

    if (slides.length && dotsContainer && prevBtn && nextBtn) {

        // Create dots
        for (var i = 0; i < slides.length; i++) {
            (function(index) {
                var dot = document.createElement('button');
                dot.classList.add('carousel-dot');
                if (index === 0) dot.classList.add('active');
                dot.setAttribute('aria-label', 'Go to slide ' + (index + 1));
                dot.addEventListener('click', function() { goToSlide(index); });
                dotsContainer.appendChild(dot);
            })(i);
        }

        var dots = document.querySelectorAll('.carousel-dot');

        function updateSlide() {
            for (var j = 0; j < slides.length; j++) {
                slides[j].classList.remove('active');
                dots[j].classList.remove('active');
            }
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlide();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlide();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlide();
        }

        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        });

        // Touch/swipe support for mobile
        var touchStartX = 0;
        var touchEndX = 0;
        var carouselContainer = document.querySelector('.carousel-container');

        if (carouselContainer) {
            carouselContainer.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            carouselContainer.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                var swipeThreshold = 50;
                if (touchEndX < touchStartX - swipeThreshold) nextSlide();
                if (touchEndX > touchStartX + swipeThreshold) prevSlide();
            }, { passive: true });
        }
    }

    // Lightbox - click image to see full size
    var overlay = document.getElementById('lightboxOverlay');
    var overlayImg = document.getElementById('lightboxOverlayImg');
    var overlayCaption = document.getElementById('lightboxOverlayCaption');
    var overlayClose = document.querySelector('.lightbox-overlay-close');

    if (overlay && overlayImg) {
        // Click carousel image to open
        for (var k = 0; k < slides.length; k++) {
            (function(slide) {
                var img = slide.querySelector('img');
                if (img) {
                    img.addEventListener('click', function() {
                        var caption = slide.querySelector('.carousel-caption');
                        overlayImg.src = img.src;
                        overlayImg.alt = img.alt;
                        overlayCaption.innerHTML = caption ? caption.innerHTML : '';
                        overlay.classList.add('active');
                        document.body.style.overflow = 'hidden';
                    });
                }
            })(slides[k]);
        }

        // Close on X button
        if (overlayClose) {
            overlayClose.addEventListener('click', function() {
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Close on background click
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && overlay.classList.contains('active')) {
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Parallax effect on hero
    window.addEventListener('scroll', function() {
        var scrolled = window.pageYOffset;
        var heroSection = document.querySelector('.hero');
        if (heroSection && scrolled < window.innerHeight) {
            heroSection.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';
        }
    });

});
