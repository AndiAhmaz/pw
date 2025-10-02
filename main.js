document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('mainNav');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const parallaxElements = document.querySelectorAll('.parallax, .parallax-light');

    window.addEventListener('scroll', function() {
        parallaxElements.forEach(element => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            element.style.backgroundPositionY = rate + 'px';
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.feature-card, .activity-card, .facility-card, .pengurus-card, .timeline-item');

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            const formMessage = document.getElementById('formMessage');

            if (name && email && phone && subject && message) {
                formMessage.className = 'alert alert-success mt-3';
                formMessage.textContent = 'Terima kasih! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.';
                formMessage.style.display = 'block';

                contactForm.reset();

                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            } else {
                formMessage.className = 'alert alert-danger mt-3';
                formMessage.textContent = 'Mohon lengkapi semua field yang diperlukan.';
                formMessage.style.display = 'block';
            }
        });
    }

    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    const navbar_toggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbar_toggler && navbarCollapse) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    navbar_toggler.click();
                }
            });
        });
    }
});
