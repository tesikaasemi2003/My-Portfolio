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



// ── About Section: Horizontal Slide Navigation ──
(function () {
    const pages = document.querySelectorAll('#aboutScroll .content');
    const dots = document.querySelectorAll('#navDots a');
    const counter = document.getElementById('pageCounter');
    let current = 0;
    let isAnimating = false;

    // Show initial page
    pages[0].style.display = 'flex';
    pages[0].style.opacity = '1';

    function goTo(index) {
        if (isAnimating || index === current || index < 0 || index >= pages.length) return;
        isAnimating = true;

        const direction = index > current ? 1 : -1;
        const outPage = pages[current];
        const inPage = pages[index];

        // Prepare incoming page — position it off-screen left or right
        inPage.style.display = 'flex';
        inPage.style.opacity = '1';
        inPage.style.transform = `translateX(${direction * 100}%)`;
        inPage.style.transition = 'none';

        // Force reflow
        inPage.offsetHeight;

        // Slide both pages simultaneously
        outPage.style.transition = 'transform 0.65s cubic-bezier(0.77, 0, 0.175, 1)';
        inPage.style.transition  = 'transform 0.65s cubic-bezier(0.77, 0, 0.175, 1)';

        outPage.style.transform = `translateX(${-direction * 100}%)`;
        inPage.style.transform  = 'translateX(0%)';

        outPage.addEventListener('transitionend', function handler() {
            outPage.removeEventListener('transitionend', handler);
            outPage.style.display = 'none';
            outPage.style.transform = 'translateX(0%)';
            outPage.style.transition = 'none';
            isAnimating = false;
        });

        // Update dots
        dots[current].classList.remove('active');
        dots[index].classList.add('active');

        // Update counter
        counter.textContent = `0${index + 1} / 0${pages.length}`;

        current = index;
    }

    // ── Dot clicks ──
    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

    // ── Mouse wheel inside #About ──
    const section = document.getElementById('About');
    section.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY > 30)  goTo(current + 1);
        if (e.deltaY < -30) goTo(current - 1);
    }, { passive: false });

    // ── Arrow keys ──
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(current + 1);
        if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goTo(current - 1);
    });

    // ── Touch / swipe support ──
    let touchStartX = 0;
    let touchStartY = 0;

    section.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    section.addEventListener('touchend', (e) => {
        const dx = touchStartX - e.changedTouches[0].clientX;
        const dy = touchStartY - e.changedTouches[0].clientY;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
            dx > 0 ? goTo(current + 1) : goTo(current - 1);
        }
    }, { passive: true });

})();