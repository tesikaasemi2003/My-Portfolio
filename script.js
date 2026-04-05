const person = document.getElementById('person');
const main   = document.getElementById('main');
const vertical = document.getElementById('vertical');
const tagline  = document.getElementById('tagline');

person.addEventListener('mouseenter', () => {
    main.textContent     = 'ENGINEER';
    vertical.textContent = 'SOFTWARE ENGINEER';
    tagline.textContent  = "That's Me again!";
});

person.addEventListener('mouseleave', () => {
    main.textContent     = 'DESIGNER';
    vertical.textContent = 'UI/UX DESIGNER';
    tagline.textContent  = "Yes, that's Me!";
});

/*==============About Me================*/

const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX - 6 + 'px';
    cursor.style.top  = e.clientY - 6 + 'px';
});

const sections = document.querySelectorAll('.section');
const dots     = document.querySelectorAll('.nav-dots a');
const counter  = document.getElementById('pageCounter');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const idx = [...sections].indexOf(entry.target);
            dots.forEach(d => d.classList.remove('active'));
            if (dots[idx]) dots[idx].classList.add('active');
            counter.textContent = String(idx + 1).padStart(2, '0') + ' / 04';
        }
    });
}, { threshold: 0.6 });

sections.forEach(s => observer.observe(s));