const hero = document.getElementById('hero');
const person = document.getElementById('person');
const logo = document.getElementById('logo');
const main = document.getElementById('main');
const vertical = document.getElementById('vertical');
const tagline = document.getElementById('tagline');

person.addEventListener('mouseenter', () => {
    hero.classList.add('person-hover-effect');

    logo.innerHTML = `UI/UX<br>DESIGNER`;
    main.textContent = `DESIGNER`;
    vertical.textContent = `UI/UX DESIGNER`;
    tagline.textContent = `That's Me again!`;
});