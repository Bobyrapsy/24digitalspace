const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const time = document.querySelector('#time');
const navbar = document.querySelector('.nav-container');
const secondSection = document.querySelector('.second');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

burger.addEventListener('click', () => {
    if (time.classList.contains('hidden')){
        time.classList.remove('hidden');
    } else {
        time.classList.add('hidden');
    }
});




document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card-1');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const image = this.querySelector('.group img');
            image.classList.add('scale-110');
        });

        card.addEventListener('mouseleave', function () {
            const image = this.querySelector('.group img');
            image.classList.remove('scale-110');
        });
    });
});




//scroll reveal
ScrollReveal({
    reset: true,
    distance: '120px',
    duration: 2500,
    delay: 100
 });

 ScrollReveal().reveal('.first .box-1', {delay:500, origin: 'left'});
 ScrollReveal().reveal('.first .box-2', {delay:700, origin: 'bottom'});
 ScrollReveal().reveal('.second .h1', {delay:200, origin: 'left'});
 ScrollReveal().reveal('.second .sp-one', {delay:200, origin: 'bottom'});



//owl-carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive:{
       0:{
          items: 1
       }
    }
 })


 function showYada(card) {
    // Hide all yada-bg divs
    let yadaDivs = document.querySelectorAll('.yada-bg');
    yadaDivs.forEach(yada => {
        yada.style.transform = 'translateX(20%)'; // Move yada off the screen to the right
        yada.style.opacity = '0'; // Set opacity to 0 to make it invisible
    });

    // Show yada-bg of hovered card
    let yadaBg = card.querySelector('.yada-bg');
    yadaBg.style.transform = 'translateX(0)'; // Move yada to its original position
    yadaBg.style.opacity = '1'; // Set opacity to 1 to make it visible
}


$('.test-popup-link').magnificPopup({
    type: 'image',
    gallery: {enabled:true}
    // other options
  });




  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.nav-container');
    var scrollPosition = window.scrollY;
    
    if (scrollPosition > 200) { // adjust this value to your needs
      navbar.classList.add('navbar_fixed');
    } else {
      navbar.classList.remove('navbar_fixed');
    }
  });
  








 

