$('#cat-1').owlCarousel({
    items:6,
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    autoplay: true,
    rtl:true,
    slideTransition: 'linear',
    autoplayTimeout: 2500,
    autoplaySpeed: 5000,
    autoplayHoverPause: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})
$('#cat-2').owlCarousel({
    items:6,
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 2500,
    autoplaySpeed: 5000,
    autoplayHoverPause: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})
$('#cat-3').owlCarousel({
    items:4,
    loop:false,
    margin:20,
    nav:true,
    dots:false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1200:{
            items:4
        }
    }
})


$('#cat-4').owlCarousel({
    items:4,
    loop:false,
    margin:20,
    nav:true,
    dots:false,
    autoplay: false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
             nav:true
        }
    }
})
$('#cat-5').owlCarousel({
    items:2,
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        }
    }
})
$('#cat-6').owlCarousel({
    loop: true,
    autoplay: true,
    items: 1,
    dots:false,
    nav: true,
    slideTransition: 'linear',
    autoplayTimeout: 2500,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp'
})


const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    800: {
      slidesPerView: 2
    }
  }
});






