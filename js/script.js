const navButton = document.querySelector('.header__burger');

navButton.addEventListener('click', e => {navButton.classList.toggle('active');
document.querySelector('.header__menu').classList.toggle('active');
document.querySelector('body').classList.toggle('lock')})