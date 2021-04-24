gsap.registerPlugin(ScrollTrigger);

const navButton = document.querySelector('.header__burger');

function init() {
navButton.addEventListener('click', e => {navButton.classList.toggle('active');
document.querySelector('.header__menu').classList.toggle('active');
document.querySelector('body').classList.toggle('lock')})

gsap.to('.img-moon',{
    y: 500,
    scrollTrigger: {
        trigger:'.img-moon',
        start:'top-=100 top+=150',
        end:'bottom+=500 top',
        scrub: true
    }
})
}

window.addEventListener('load', function () {
    init();
});