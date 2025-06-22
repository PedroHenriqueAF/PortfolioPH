// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Barra de progresso de scroll
window.addEventListener('scroll', () => {
    const progress = document.querySelector('.progress-bar');
    const scroll = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    const percent = (scroll / height) * 100;
    progress.style.width = percent + '%';
});

// Animação de digitação no subtítulo do Hero
const typingText = document.getElementById('typing-text');
if (typingText) {
    const phrases = [
        "Backend & Database Developer",
        "Passionate about technology and books",
        "Seeking challenges and innovation"
    ];
    let phraseIndex = 0, charIndex = 0, isDeleting = false;

    function type() {
        const current = phrases[phraseIndex];
        typingText.textContent = isDeleting
            ? current.substring(0, charIndex--)
            : current.substring(0, charIndex++);

        if (!isDeleting && charIndex === current.length + 1) {
            isDeleting = true;
            setTimeout(type, 1200);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(type, 400);
        } else {
            setTimeout(type, isDeleting ? 40 : 80);
        }
    }
    type();
}

// Filtro de habilidades
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filter = this.getAttribute('data-filter');
        document.querySelectorAll('.skill-card').forEach(card => {
            card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
        });
    });
});

// Feedback animado no envio do formulário
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        form.reset();
        const success = form.querySelector('.form-success');
        if (success) {
            success.style.display = 'block';
            setTimeout(() => { success.style.display = 'none'; }, 2500);
        }
    });
}