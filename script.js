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