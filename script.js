// Elementi DOM
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const projectCards = document.querySelectorAll('.project-card');
const skillItems = document.querySelectorAll('.skill-item');
const contactForm = document.querySelector('.contact-form');

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Chiudi menu mobile quando si clicca su un link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling per i link di navigazione
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animazione del codice nella hero section
function animateCode() {
    const codeLines = document.querySelectorAll('.code-line');
    codeLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, index * 200);
    });
}

// Intersection Observer per animazioni al scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            
            // Animazioni specifiche per sezioni
            if (entry.target.classList.contains('project-card')) {
                entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
            }
            
            if (entry.target.classList.contains('skill-item')) {
                entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
            }
        }
    });
}, observerOptions);

// Applica observer agli elementi
projectCards.forEach(card => observer.observe(card));
skillItems.forEach(item => observer.observe(item));

// Animazione delle statistiche
function animateStats() {
    const stats = document.querySelectorAll('.stat h3');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + '+';
        }, 50);
    });
}

// Typing effect per il titolo
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Aggiungi cursore lampeggiante
            element.innerHTML += '<span class="cursor">|</span>';
        }
    }
    type();
}

// Effetto terminale per il titolo
function addTerminalEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.position = 'relative';
        // Non aggiungiamo il prompt per evitare conflitti
    }
}

// Parallax effect per la hero section
function parallaxEffect() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
}

// Gestione del form di contatto
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Non prevenire l'invio del form - lascia che vada a Formspree
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Invio in corso...';
        submitBtn.disabled = true;
        
        // Il form verrà inviato automaticamente a Formspree
        // Aggiungi feedback dopo l'invio
        setTimeout(() => {
            const successMessage = document.getElementById('form-success');
            if (successMessage) {
                successMessage.style.display = 'block';
                contactForm.reset();
            }
            
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Nascondi il messaggio dopo 5 secondi
            setTimeout(() => {
                if (successMessage) {
                    successMessage.style.display = 'none';
                }
            }, 5000);
        }, 2000);
    });
}

// Animazione delle skill al hover
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05) translateX(10px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1) translateX(0)';
    });
});

// Effetto particelle per la hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const colors = ['#00ff88', '#00aaff', '#aa00ff', '#ffff00'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: ${randomColor};
            border-radius: 50%;
            pointer-events: none;
            animation: float ${Math.random() * 4 + 3}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            box-shadow: 0 0 10px ${randomColor};
        `;
        hero.appendChild(particle);
    }
}

// Aggiungi CSS per le particelle
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Dark mode toggle (opzionale)
function createDarkModeToggle() {
    const toggle = document.createElement('button');
    toggle.innerHTML = '🌙';
    toggle.className = 'dark-mode-toggle';
    toggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: var(--primary-color);
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1001;
        transition: all 0.3s ease;
    `;
    
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggle.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
    
    document.body.appendChild(toggle);
}

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    // Anima il codice dopo un breve delay
    setTimeout(animateCode, 500);
    
    // Crea particelle
    createParticles();
    
    // Aggiungi dark mode toggle
    createDarkModeToggle();
    
    // Animazione delle statistiche quando la sezione about è visibile
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    aboutObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        aboutObserver.observe(aboutSection);
    }
    
    // Typing effect per il titolo principale
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            // Non usiamo il typeWriter per evitare conflitti
            addTerminalEffect();
        }, 1000);
    }
});

// Gestione del resize della finestra
window.addEventListener('resize', () => {
    // Rimuovi menu mobile se la finestra viene ridimensionata
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--primary-color);
        z-index: 1002;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Inizializza la barra di progresso
createScrollProgress();

// Effetti hover avanzati per i progetti
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Animazione delle icone social
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-3px) rotate(5deg)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// Effetto di caricamento della pagina
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Aggiungi CSS per l'effetto di caricamento
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .dark-mode {
        --bg-primary: #1f2937;
        --bg-secondary: #374151;
        --text-primary: #f9fafb;
        --text-secondary: #d1d5db;
        --border-color: #4b5563;
    }
`;
document.head.appendChild(loadingStyle); 