

const btn = document.getElementById('main-action');


btn.addEventListener('click',() => {
    document.getElementById('cars').scrollIntoView({behavior: 'smooth'});
})

document.querySelectorAll('.car-btn').forEach(el =>{
    el.addEventListener('click', () => {
        document.getElementById('price').scrollIntoView({behavior: 'smooth'});
    })
})

const priceBtn = document.querySelector('.price-btn');
priceBtn.addEventListener('click', ()=>{
    if(document.getElementById('name').value===''){
        alert('Заполните поле: Имя!')
    }else if(document.getElementById('phone').value===''){
        alert('Заполните поле: Телефон!')
    }else if(document.getElementById('auto').value===''){
        alert('Заполните поле: Автомобиль!')
    }else {
        alert('Данные отправленны!')
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-img');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
    })
});


const menuBtn = document.querySelector('.menu-mobile-btn');
const menuList = document.querySelector('.menu-mobile-list');
const mobileMenuLink = document.querySelectorAll('.menu-mobile-link');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('open');
});
mobileMenuLink.forEach(el => {
    el.addEventListener('click', ()=>{
        menuBtn.classList.remove('active');
        menuList.classList.remove('open');

    })
})