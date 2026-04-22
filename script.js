document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Scroll Animation (Fade-in)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .service-card, .price-card').forEach(el => {
        el.classList.add('fade-in'); 
        observer.observe(el);
    });

    // 3. Form Validation
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = form.querySelector('input[type="email"]').value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(email)) {
                alert("Veuillez entrer une adresse email valide.");
                return;
            }

            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = "C'est envoyé !";
            btn.style.backgroundColor = "#2ecc71";
            
            form.reset();
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = "#c8961e";
            }, 3000);
        });
    }

    // 4. Header Scroll Effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.style.padding = "10px 0";
            header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
        } else {
            header.style.padding = "15px 0";
            header.style.backgroundColor = "#ffffff";
        }
    });
});