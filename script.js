const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach(button =>{
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1 //this loops over the buttons to determine whether it is next or prev, if its 1 next image  and  -1 prev image
        const slides = button.closest('[data-carousel]').querySelector('[data-slides]')

        const activeSlide = slides.querySelector('[data-active]')
        let newIndex = [...slides.children].indexOf(activeSlide)+offset // this turns the slides to an array and it checks the position of the active slides and it can work correctly
        if(newIndex<0)newIndex = slides.children.length - 2
        if(newIndex>= 3)newIndex = 0

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active
    })
})


const hamburger = document.querySelector('.fa-bars');
const aside = document.querySelector('aside');
const close  = document.querySelector('.fa-close');
const drinks = document.querySelector('.drink_selections');
const logo = document.querySelector('.fantalogo');

hamburger.addEventListener('click',()=>{
    aside.style.transform = 'translateY(0%)';
    aside.style.transition = 'all 0.8s ease';
    hamburger.style.visibility = 'hidden';
    close.style.visibility = 'visible';
    drinks.style.transform = 'translateX(100%)';
    drinks.style.transition = 'all 0.8s ease';
    logo.style.transition = 'all 0.8s ease';
})

close.addEventListener('click',()=>{
    aside.style.transform = 'translateY(-100%)';
    aside.style.transition = 'all 0.8s ease';
    hamburger.style.visibility = 'visible';
    close.style.visibility = 'hidden';
    drinks.style.transform = 'translateX(0%)';
    drinks.style.transition = 'all 0.8s ease';
    logo.style.transform = 'translateX(0%)';
    logo.style.transition = 'all 0.8s ease';
})

