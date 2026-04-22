document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Header Scroll Effect
    const header = document.querySelector('.js-header');
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('header--scrolled');
            header.classList.remove('header--transparent');
        } else {
            header.classList.remove('header--scrolled');
            header.classList.add('header--transparent');
        }
    });

    // 2. Smooth Scroll for Navigation
    document.querySelectorAll('.header__link, .btn').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 3. Scroll Reveal Animation
    const revealItems = document.querySelectorAll('.js-reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a slight delay based on index for grid items if needed
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.15
    });

    revealItems.forEach(item => {
        revealObserver.observe(item);
    });

    // 4. Form Validation & Interaction
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            
            // Simple visual feedback
            btn.disabled = true;
            btn.textContent = "Sending...";
            
            setTimeout(() => {
                btn.textContent = "Estimate Requested! ";
                btn.style.backgroundColor = "#2ecc71";
                form.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.backgroundColor = "";
                    btn.disabled = false;
                }, 4000);
            }, 1500);
        });
    }
});