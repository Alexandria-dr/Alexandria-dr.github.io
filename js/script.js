const navButton = document.querySelector('.header__burger');
console.log(navButton);

navButton.addEventListener('click', e => {navButton.classList.toggle('active');
document.querySelector('.header__menu').classList.toggle('active');
document.querySelector('body').classList.toggle('lock')})