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
    autoplayHoverPause: true,
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
    autoplayHoverPause: true,
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
    autoplayHoverPause: true,
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
        0:{ items:1, dots:true },
        600:{ items:2, dots:false }
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

// add aria labels for owl nav buttons (helps screen reader users)
$('.owl-theme .owl-nav button.owl-prev').attr({ 'aria-label': 'Previous', 'title': 'Previous' });
$('.owl-theme .owl-nav button.owl-next').attr({ 'aria-label': 'Next', 'title': 'Next' });

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 20,
  centeredSlides: true,
  a11y: { enabled: true },
  keyboard: { enabled: true, onlyInViewport: true },
  autoplay: { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  breakpoints: { 0: { slidesPerView: 1 }, 800: { slidesPerView: 2 } }
});

// stop/start autoplay on hover and focus for accessibility
var swiperEl = document.querySelector('.swiper');
if (swiperEl) {
  swiperEl.addEventListener('mouseenter', function () { swiper.autoplay.stop(); });
  swiperEl.addEventListener('mouseleave', function () { swiper.autoplay.start(); });
  swiperEl.addEventListener('focusin', function () { swiper.autoplay.stop(); });
  swiperEl.addEventListener('focusout', function () { swiper.autoplay.start(); });
}

// generic keyboard and focus/pause handlers for all owl carousels

// Hero play/pause controls for CSS-based marquee
(function () {
  var heroToggle = document.querySelector('.hero-toggle');
  var banner1 = document.querySelector('.banner-slide-1');
  var banner2 = document.querySelector('.banner-slide-2');
  if (heroToggle && banner1 && banner2) {
    heroToggle.addEventListener('click', function () {
      var paused = heroToggle.getAttribute('aria-pressed') === 'true';
      heroToggle.setAttribute('aria-pressed', String(!paused));
      heroToggle.textContent = paused ? 'Pause' : 'Play';
      banner1.classList.toggle('paused');
      banner2.classList.toggle('paused');
    });
  }
})();
$('.carousel').on('keydown', function (e) {
  if (e.key === 'ArrowLeft') $(this).trigger('prev.owl.carousel');
  if (e.key === 'ArrowRight') $(this).trigger('next.owl.carousel');
}).on('focusin mouseenter', function () {
  $(this).trigger('stop.owl.autoplay');
}).on('focusout mouseleave', function () {
  $(this).trigger('play.owl.autoplay', [2500]);
});

// Accessible tabs (if present)
(function () {
  function activateTab($btn) {
    var target = $btn.attr('aria-controls');
    $('.tab-link').attr('aria-selected', 'false');
    $btn.attr('aria-selected', 'true');
    $('.tab-panel').attr('hidden', '');
    $('.tab-panel').removeClass('active');
    $('#' + target).removeAttr('hidden').addClass('active');
    $('#' + target).focus();
  }

  $('.tab-link').on('click', function (e) {
    e.preventDefault();
    activateTab($(this));
  }).on('keydown', function (e) {
    var $items = $('.tab-link');
    var idx = $items.index(this);
    if (e.key === 'ArrowRight') $items.eq((idx + 1) % $items.length).focus();
    if (e.key === 'ArrowLeft') $items.eq((idx - 1 + $items.length) % $items.length).focus();
    if (e.key === 'Home') $items.first().focus();
    if (e.key === 'End') $items.last().focus();
    if (e.key === 'Enter' || e.key === ' ') activateTab($(this));
  });
})();

// Respect users who prefer reduced motion: stop all autoplay
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  try { $('.owl-carousel').trigger('stop.owl.autoplay'); } catch (e) {}
  try { if (typeof swiper !== 'undefined' && swiper.autoplay) swiper.autoplay.stop(); } catch (e) {}
}



