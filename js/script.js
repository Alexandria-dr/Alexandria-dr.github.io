gsap.registerPlugin(ScrollTrigger);

const navButton = document.querySelector('.header__burger');

const listFromLeft = document.querySelectorAll('.gsap-list-from-left');
const fromLeft = document.querySelectorAll('.gsap-from-left');
const fromRight = document.querySelectorAll('.gsap-from-right')

function init() {
navButton.addEventListener('click', e => {navButton.classList.toggle('active');
document.querySelector('.header__menu').classList.toggle('active');
document.querySelector('body').classList.toggle('lock')})

gsap.to('.img-moon',{
    y: 500,
    scrollTrigger: {
        trigger:'.img-moon',
        start:'top-=100 top+=100',
        end:'bottom+=500 top',
        scrub: true,
        // markers: true,
    }
})

listFromLeft.forEach(element => {
    gsap.from(element,{
        x: -200,
        opacity: 0,
        scrollTrigger:{
            trigger:element,
            start: 'top-=400 center',
            end: 'top-=200 center-=50',
            scrub: true,
        }
        }
    )
})
fromLeft.forEach(element => {
    gsap.from(element,{
        x: -200,
        opacity: 0,
        scrollTrigger:{
            trigger:element,
            start: 'top-=300 center',
            end: 'center-=100 center',
            scrub: true,
        }
        }
    )
})

fromRight.forEach(element => {
    gsap.from(element,{
        x: +200,
        opacity: 0,
        scrollTrigger:{
            trigger:element,
            start: 'top-=300 center',
            end: 'center-=100 center',
            scrub: true,
        }
        }
    )
})
}

window.addEventListener('load', function () {
    init();
});