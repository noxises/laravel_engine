function stickHeader() {
    let headerTop = document.querySelector('.header.not-index .header-top');
    if (window.innerWidth < 768) {
        window.addEventListener('scroll', ()=>{
            if (scrollY > document.querySelector('.header').clientHeight){
                headerTop.classList.add('sticky');
                document.querySelector('.wrapper-inner').style.marginTop = 119 + 'px';
            } else {
                headerTop.classList.remove('sticky');
                document.querySelector('.wrapper-inner').style.marginTop = 20 + 'px';
            }
        });
    }
}

stickHeader()

function checkTab(){
    let tabBody = document.querySelector('.tab-body');
    let tabInner = document.querySelectorAll('.tab-inner');
    let tabHeaderItem = document.querySelectorAll('.tab-header-item');

    let tabHeaderItems = [];
    let tabInners = [];

    for (let headerItems of tabHeaderItem){
        tabHeaderItems.push(headerItems);
    }

    for (let items of tabInner) {
        tabInners.push(items);
    }

    window.addEventListener('load', function (){
        for (let i = 0; i < tabHeaderItems.length; i++){
            tabBody.style.height = tabInners[0].clientHeight + 'px';
            tabHeaderItems[i].addEventListener('click', ()=>{
                tabBody.style.height = tabInners[i].clientHeight + 'px';
            })
        }

        window.addEventListener('resize', function (){
            for (let i = 0; i < tabHeaderItems.length; i++){
                tabBody.style.height = tabInners[0].clientHeight + 'px';
                tabHeaderItems[i].addEventListener('click', ()=>{
                    tabBody.style.height = tabInners[i].clientHeight + 'px';
                })
            }
        });
    });




}

checkTab();

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

function tab() {
    let tabBtn = document.querySelectorAll('.tab-header-item');
    let tabItem = document.querySelectorAll('.tab-inner');

    let btnArr = [];
    let tabArr = [];

    for (let btn of tabBtn) {
        btnArr.push(btn);
    }

    for (let item of tabItem) {
        tabArr.push(item);
    }

    for (let btn of btnArr) {
        btn.addEventListener('click', function (e) {
            if (!e.target.classList.contains('active')){
                let num = btnArr.indexOf(btn);
                for (let btnR of btnArr) {
                    btnR.classList.remove('active');
                    for (let i = 0; i< tabArr.length; i ++) {
                        tabArr[i].classList.remove('active');
                    }
                }
                e.target.classList.add('active');
                tabArr[num].classList.add('active');
            }
        });
    }

}

tab();


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
    let canvasBox = document.querySelector('.footer');
    for (let i = 0; i < canvases.length; i++) {
        let ctx = canvases[i].getContext('2d');
        let w = canvases[i].width = canvasBox.clientWidth;
        let h = canvases[i].height = canvasBox.clientHeight;

        window.addEventListener('resize', function () {
            w = canvases[i].width = canvasBox.clientWidth;
            h = canvases[i].height = canvasBox.clientHeight;
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