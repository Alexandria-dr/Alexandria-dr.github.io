gsap.registerPlugin(ScrollTrigger);

const navButton = document.querySelector('.header__burger');

const listFromLeft = document.querySelectorAll('.gsap-list-from-left');
const fromLeft = document.querySelectorAll('.gsap-from-left');
const fromRight = document.querySelectorAll('.gsap-from-right')

function animation(for_, x, start, end1, end2, moon ) {
    gsap.to('.img-moon', {
        y: 500,
        scrollTrigger: {
            trigger: '.img-moon',
            start: `top-=110 top+=${moon}`,
            end: 'bottom+=1500 top',
            scrub: true,
        }
    });

    for_.forEach(element => {
        gsap.from(element, {
            x: x,
            opacity: 0,
            scrollTrigger: {
                trigger: element,
                start: `top${start} center`,
                end: `top${end1} center${end2}`,
                scrub: true,
            }
        }
        )
    })
}

function initDisplay() {
    var param = [
        listFL = [listFromLeft, '-200', '-=280', '-=200', '-=50'  ],
        fL = [fromLeft, '-200', '-=200', '-=0', ''],  
        fR = [fromRight, '+200', fL[2], fL[3], fL[4]] ];

   for (let i = 0; i < 3; i++) {
       vvar = [];
       for (let ii = 0; ii < 5; ii++) {
                vvar.push(param[i][ii])
            }
        vvar[5] = 100;
        animation.apply(this, vvar);
  }
}

function initScreen() {
    navButton.addEventListener('click', e => {
        navButton.classList.toggle('active');
        document.querySelector('.header__menu').classList.toggle('active');
        document.querySelector('body').classList.toggle('lock')
    })
    
    var param = [
        listFL = [listFromLeft, '-200', '-=300', '-=180', '-=150'  ],
        fL = [fromLeft, '-200', '-=100', '+=50', ''],  
        fR = [fromRight, '+200', fL[2], fL[3], fL[4]] ];

    for (let i = 0; i < 3; i++) {
        vvar = [];
        for (let ii = 0; ii < 5; ii++) {
                vvar.push(param[i][ii])
             }
         vvar[1]= 0;
         vvar[5] = 200;
         animation.apply(this, vvar);
   }
}

const mm = window.matchMedia('(min-width: 768px)')

window.addEventListener('load', function () {

  mm.matches ? initDisplay() : initScreen()

});
