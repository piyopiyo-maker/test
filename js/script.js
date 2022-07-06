const swiper = new Swiper('.swiper', {
  // Optional parameters
  // // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

new WOW().init();

jQuery('.drawer-icon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
});

jQuery('a[href^="#"]').on('click', function() {

  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if ( id != '#') {
    var position = jQuery(id).offset().top - header;
  }
  // console.log(id);
  // console.log(position);
  jQuery('html,body').animate({
    scrollTop: position
  },
  300);
});

jQuery(window).on('scroll', function() {
  if ( 100 < jQuery(this).scrollTop()) {
    jQuery('.to-top').addClass('is-show');
  } else {
    jQuery('.to-top').removeClass('is-show')
  }
});

jQuery('.header_nav li a').on('click', function() {
  jQuery('.header_nav li a').removeClass('is-active');
  jQuery(this).addClass('is-active');
});

jQuery('.qa-box_q').on('click', function() {
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa-box_icon').toggleClass('is-open');
});



jQuery('.js-close-button').on('click', function(e) {
  e.preventDefault();
  // alert('click!閉じる');
  var target = jQuery(this).data('target');
  jQuery(target).hide();
});

jQuery('.js-open-button').on('click', function(e) {
  e.preventDefault();
  // alert('click!閉じる');
  var target = jQuery(this).data('target');
  jQuery(target).show();
});