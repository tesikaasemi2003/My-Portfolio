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

/*====================Nav=====================*/

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('nav a');
const navMenu = document.querySelector('nav');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // This removes the 'open' class you defined in your HTML/CSS
        navMenu.classList.remove('open');
    });
});

// Optional: Smooth scroll adjustment for the "My Projects" drawer
// Since your projects are inside a "drawer" that opens on swipe/click,
// you might want the "My Projects" link to trigger the drawer open.

const projectsLink = document.querySelector('a[href="#projects"]');
projectsLink.addEventListener('click', (e) => {
    // If the drawer is closed when clicking the nav link, open it
    if (typeof openDrawer === "function") {
        openDrawer();
    }
});

/*==================== MY Works====================*/

const drawer   = document.getElementById('projectsDrawer');
const hint     = document.getElementById('swipeHint');
const handle   = document.getElementById('drawerHandle');
const closeBtn = document.getElementById('drawerClose');
const section  = document.getElementById('projects');
const cards    = document.querySelectorAll('.project_card');
let isOpen     = false;
let touchStartY = 0;
let triggered  = false;

function openDrawer() {
    isOpen = true;
    drawer.classList.add('open');
    hint.style.opacity = '0';
    hint.style.pointerEvents = 'none';
    if (!triggered) {
        triggered = true;
        cards.forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), 300 + i * 120);
        });
    }
}

function closeDrawer() {
    isOpen = false;
    drawer.classList.remove('open');
    drawer.scrollTop = 0;
    hint.style.opacity = '1';
    hint.style.pointerEvents = 'auto';
}

hint.addEventListener('click', openDrawer);
handle.addEventListener('click', () => isOpen ? closeDrawer() : openDrawer());
closeBtn.addEventListener('click', closeDrawer);

section.addEventListener('wheel', e => {
    if (e.deltaY > 30 && !isOpen) { openDrawer(); return; }
    if (e.deltaY < -30 && isOpen && drawer.scrollTop === 0) closeDrawer();
}, { passive: true });

section.addEventListener('touchstart', e => {
    touchStartY = e.touches[0].clientY;
}, { passive: true });

section.addEventListener('touchend', e => {
    const dy = touchStartY - e.changedTouches[0].clientY;
    if (dy > 50 && !isOpen) openDrawer();
    if (dy < -50 && isOpen && drawer.scrollTop === 0) closeDrawer();
}, { passive: true });