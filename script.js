const hero = document.getElementById('hero');
const person = document.getElementById('person');
const logo = document.getElementById('logo');
const main = document.getElementById('main');
const vertical = document.getElementById('vertical');
const tagline = document.getElementById('tagline');

person.addEventListener('mouseenter', () => {
    hero.classList.add('person-hover-effect');

    logo.innerHTML = `SOFTWARE<br>ENGINEER`;
    main.textContent = `ENGINEER`;
    vertical.textContent = `SOFTWARE ENGINEER`;
    tagline.textContent = `That's Me again!`;
});

person.addEventListener('mouseleave', () => {
    hero.classList.remove('person-hover-effect');

    logo.innerHTML = `UI/UX<br>DESIGNER`;
    main.textContent = `DESIGNER`;
    vertical.textContent = `UI/UX DESIGNER`;
    tagline.textContent = `Yes, that's Me!`;
});