'use strict'

!(function () {
    function stickHeader() {
        let headerTop = document.querySelector('.header-top');
        if (window.innerWidth < 768) {
            window.addEventListener('scroll', ()=>{
                if (scrollY > headerTop.clientHeight){
                    headerTop.classList.add('sticky');
                    document.querySelector('.header-text').style.marginTop = 179 +'px';
                } else {
                    headerTop.classList.remove('sticky');
                    document.querySelector('.header-text').style.marginTop = 20 + 'px';
                }
            });
        }
    }

    stickHeader()

    function openModal() {
        let modalTrigger = document.querySelector('.footer-btn');
        let modal = document.querySelector('.modal');
        let html = document.querySelector('html');
        let mask = document.querySelector('.mask');
        let formClose = document.querySelector('.form-close');
        modal.classList.remove('is-open');
        html.classList.remove('modal-is-open');
        mask.classList.remove('is-active');

       modal.addEventListener('click', function (e){
           if (!e.target.classList.contains('form') && (!e.target.classList.contains('input')) && (!e.target.classList.contains('form-title')) && (!e.target.classList.contains('form-btn'))) {
               modal.classList.remove('is-open');
               html.classList.remove('modal-is-open');
               mask.classList.remove('is-active');
           }
       });

       document.addEventListener('keyup', function (e){
           if (e.keyCode == '27') {
               modal.classList.remove('is-open');
               html.classList.remove('modal-is-open');
               mask.classList.remove('is-active');
           }
       })

        modalTrigger.addEventListener('click', function (){
           if (!modal.classList.contains('is-open')){
               modal.classList.add('is-open');
               html.classList.add('modal-is-open');
               mask.classList.add('is-active');
           }
        });
    }

    openModal();

    function burger() {
        let burgerTrigger = document.querySelector('.burger-trigger');
        let nav = document.querySelector('.nav-mob');

        burgerTrigger.addEventListener('click', function (){
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                nav.classList.remove('active');
            } else {
                this.classList.add('active');
                nav.classList.add('active');

            }
        })
    }

    burger();

    function animateBgText() {
        let firstText = document.querySelector('.content.first');
        let secondText = document.querySelector('.content.second');
        let headerHeight = document.querySelector('.header').clientHeight;
        let wrapperMt = getComputedStyle(document.querySelector('.wrapper')).marginTop;

        window.addEventListener('scroll', ()=> {
            let scrollY = window.scrollY;
            if (firstText.classList.contains('start')){
                firstText.querySelector('.bg-text').style.left = (scrollY - wrapperMt.slice(0,-2) - headerHeight) - 500 + 'px';
            }
            if (secondText.classList.contains('start')){
                secondText.querySelector('.bg-text').style.right = (scrollY - wrapperMt.slice(0,-2) - headerHeight - firstText.clientHeight) - 500 +'px';
            }
        })
    }

    animateBgText();

    function animateBtn() {
        let btns = document.querySelectorAll('.header-button');
        for (let btn of btns) {
            let width = btn.clientWidth;

            btn.addEventListener('mouseenter', function () {
                this.style.backgroundPositionX = -width + 'px';
            });

            btn.addEventListener('mouseleave', function () {
                this.style.backgroundPositionX = 0 + 'px';
            })
        }
    }

    animateBtn();


    function animateTeam() {
        let teamItems = document.querySelectorAll('.team-item');
        let trigger = document.querySelector('.team');
        let i = 0;
        let team = [];

        for (let item of teamItems) {
            team.push(item);
        }

        let observer = new MutationObserver(() => {
            if (trigger.classList.contains('start')) {
                !(function animate() {
                    setTimeout(function () {
                        team[i].classList.add('is-show');
                        i++;
                        if (i < team.length) {
                            animate();
                        }
                    }, 150);
                }())
            }
        });

        observer.observe(trigger, {
            attributes: true
        });
    }

    animateTeam();


    function animateDots(el) {
        let trigger = document.querySelector(`.content.${el}`);
        let dots = trigger.querySelectorAll('.dots');
        let animate = false;

        window.addEventListener('scroll', function () {
            if (!trigger.classList.contains('start')) {
                animate = true;
            } else {
                if (animate) {
                    for (let dot of dots) {
                        dot.animate([
                            {transform: `translateX(${(Math.random() * 401) - 300}px) translateY(${(Math.random() * 401) - 300}px)`},
                            {
                                transform: 'translateX(0) translateY(0)',
                                opacity: 1
                            }
                        ], {
                            // timing options
                            duration: 500,
                        });
                    }
                }
                animate = false;
            }
        });
    }

    animateDots('first');
    animateDots('second');

    function calculateScroll() {
        //let scroll = document.querySelector('.scroll-thumb');
        /*window.addEventListener('scroll', () => {
            scroll.style.transform = `translateY(${pageYOffset / 8}px)`;
        });*/
    }

    let elements = [
        'content.first',
        'content.second',
        'team',
        'exp',
        'work'
    ]

    //calculateScroll();
    let visible = false;

    function calculateVisible(el, value) {
        //let scrollNum = document.querySelector('.scroll-count');
        //scrollNum.innerHTML = '00';
        let e = document.querySelector(`.${el}`);
        document.addEventListener('scroll', () => {
            if (!visible && !e.classList.contains('start')) {
                if (pageYOffset >= e.offsetTop - window.innerHeight / 2) {
                    visible = true;
                }
            }

            if (visible) {
                e.classList.add('start');
                visible = false;
                //scrollNum.innerHTML = `0${value}`;
            }
        })
    }

    for (let i = 0; i < elements.length; i++) {
        calculateVisible(elements[i], i + 1)
    }

}())

let iPhones = {
    'iPhone5': {
        width: 320,
        height: 568
    },
    'iPhone6/iPhone7/iPhone8': {
        width: 375,
        height: 667
    },
    'iPhone6/iPhone7/iPhone8 Plus': {
        width: 414,
        height: 736
    },
    'iPhoneX': {
        width: 375,
        height: 812
    }
}

function checkingDevice() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let device;

    if (((width == iPhones.iPhone5.width) && (height == iPhones.iPhone5.height)) || (height == iPhones.iPhone5.width) && (width == iPhones.iPhone5.height)) {
        device = 'iPhone5'
        return device
    } else if (((width == iPhones["iPhone6/iPhone7/iPhone8"].width) && (height == iPhones["iPhone6/iPhone7/iPhone8"].height)) || (height == iPhones["iPhone6/iPhone7/iPhone8"].width) && (width == iPhones["iPhone6/iPhone7/iPhone8"].height)) {
        device = 'iPhone6/iPhone7/iPhone8'
        return device
    } else if (((width == iPhones["iPhone6/iPhone7/iPhone8 Plus"].width) && (height == iPhones["iPhone6/iPhone7/iPhone8 Plus"].height)) || (height == iPhones["iPhone6/iPhone7/iPhone8 Plus"].width) && (width == iPhones["iPhone6/iPhone7/iPhone8 Plus"].height)) {
        device = 'iPhone6/iPhone7/iPhone8 Plus'
        return device
    } else if ((width == iPhones.iPhoneX.width) && (height == iPhones.iPhoneX.height) || (height == iPhones.iPhoneX.width) && (width == iPhones.iPhoneX.height)) {
        device = 'iPhoneX'
        return device
    }
}

!(function () {
    let canvases = document.querySelectorAll('canvas');
    for (let i = 0; i < canvases.length; i++) {
        let ctx = canvases[i].getContext('2d');
        let w = canvases[i].width = window.innerWidth;
        let h = canvases[i].height = window.innerHeight;

        window.addEventListener('resize', function () {
            w = canvases[i].width = window.innerWidth;
            h = canvases[i].height = window.innerHeight;
        });

        let participles = [];

        let properties = {
            bgColor: 'rgba(0,2,52,1)',
            particleColor: `rgba(182, 113, 172, 1)`,
            particleRadius: 5,
            particleCount: 30,
            particleMaxVelocity: .5,
            lineLength: 150,
            particleLife: 50,
        };

        if (checkingDevice() == 'iPhone5') {
            properties.particleCount = 20;
        } else if (checkingDevice() == 'iPhone6/iPhone7/iPhone8') {
            properties.particleCount = 20;
        } else if (checkingDevice() == 'iPhone6/iPhone7/iPhone8 Plus') {
            properties.particleCount = 30;
        } else if (checkingDevice() == 'iPhoneX') {
            properties.particleCount = 40;
        }

        class Particle {
            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
                this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
                this.life = Math.random() * properties.particleLife * 60;
            }

            position() {
                this.x + this.velocityX > w && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0 ? this.velocityX *= -1 : this.velocityX;
                this.y + this.velocityY > h && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0 ? this.velocityY *= -1 : this.velocityY;
                this.x += this.velocityX;
                this.y += this.velocityY;
            }

            redraw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fillStyle = properties.particleColor;
                ctx.fill();
            }

            reCalculateLife() {
                if (this.life < 1) {
                    this.x = Math.random() * w;
                    this.y = Math.random() * h;
                    this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
                    this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
                    this.life = Math.random() * properties.particleLife * 60;
                }
                this.life--;
            }
        }

        function reDrawBackground() {
            ctx.fillStyle = properties.bgColor;
            ctx.fillRect(0, 0, w, h);
        }

        function drawLines() {
            let x1, y1, x2, y2, length, opacity;
            for (let i in participles) {
                for (let j in participles) {
                    x1 = participles[i].x;
                    x2 = participles[j].x;
                    y1 = participles[i].y;
                    y2 = participles[j].y;
                    length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

                    if (length < properties.lineLength) {
                        opacity = 1 - length / properties.lineLength;
                        ctx.lineWidth = 0.5;
                        ctx.strokeStyle = 'rgba(255, 255, 255, ' + opacity * .2 + ')';
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.closePath();
                        ctx.stroke();
                    }
                }
            }
        }

        function reDrawParticles() {
            for (let i in participles) {
                participles[i].reCalculateLife();
                participles[i].position();
                participles[i].redraw();
            }
        }

        function loop() {
            reDrawBackground();
            reDrawParticles();
            drawLines();
            requestAnimationFrame(loop);
        }

        function init() {
            for (let i = 0; i < properties.particleCount; i++) {
                participles.push(new Particle);
            }
            loop();
        }

        init()
    }
}())
