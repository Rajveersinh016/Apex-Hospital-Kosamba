// ========================================
// APEX HOSPITAL - JAVASCRIPT LOGIC
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // --- NAVIGATION LOGIC ---
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && menuToggle && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // --- SMOOTH SCROLL & ACTIVE LINK ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.offsetTop - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + (navbar ? navbar.offsetHeight : 0) + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        // Navbar shadow effect
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
            }
        }
    }

    window.addEventListener('scroll', debounce(updateActiveNavLink, 100));

    // --- GALLERY LOGIC ---
    const galleryItems = [
        { src: 'assets/images/reception.jpg', alt: 'Hospital Reception' },
        { src: 'assets/images/surgery.jpg', alt: 'Operating Theater' },
        { src: 'assets/images/consultation.jpg', alt: 'Doctor Consultation Room' },
        { src: 'assets/images/patient-room.jpg', alt: 'Comfortable Patient Room' },
        { src: 'assets/images/hero.jpg', alt: 'Hospital Exterior' }
    ];

    function renderGallery() {
        const galleryGrid = document.getElementById('galleryGrid');
        if (!galleryGrid) return;
        
        galleryItems.forEach((item, index) => {
            const a = document.createElement('a');
            a.className = 'gallery-item scroll-animate';
            a.setAttribute('data-index', index);
            
            a.innerHTML = `
                <img src="${item.src}" alt="${item.alt}" loading="lazy">
                <div class="gallery-overlay">
                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg> View</span>
                </div>
            `;
            
            a.addEventListener('click', (e) => {
                e.preventDefault();
                openLightbox(index);
            });
            
            galleryGrid.appendChild(a);
            
            if (observer) {
                observer.observe(a);
            }
        });
    }

    // --- LIGHTBOX LOGIC ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    let currentImageIndex = 0;

    function openLightbox(index) {
        if (!lightbox) return;
        currentImageIndex = index;
        lightboxImage.src = galleryItems[index].src;
        lightboxImage.alt = galleryItems[index].alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function changeImage(step) {
        currentImageIndex = (currentImageIndex + step + galleryItems.length) % galleryItems.length;
        lightboxImage.src = galleryItems[currentImageIndex].src;
        lightboxImage.alt = galleryItems[currentImageIndex].alt;
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', () => changeImage(-1));
    if (lightboxNext) lightboxNext.addEventListener('click', () => changeImage(1));
    
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            else if (e.key === 'ArrowLeft') changeImage(-1);
            else if (e.key === 'ArrowRight') changeImage(1);
        }
    });

    // --- SCROLL ANIMATIONS ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.scroll-animate, .dept-card, .contact-card, .about-feature');
    animateElements.forEach(el => {
        if (!el.classList.contains('scroll-animate')) {
            el.classList.add('scroll-animate');
        }
        observer.observe(el);
    });

    // Initialize Gallery
    renderGallery();

    // Load config dynamic data (optional integration)
    if (typeof SITE_CONFIG !== 'undefined') {
        console.log(`Loaded configuration for ${SITE_CONFIG.name}`);
        // Can be used to inject phone numbers, etc. dynamically if desired
    }
});
