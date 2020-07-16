$(document).ready(function () {
  $("a").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });

  $('.open-menu').on('click', function () {
    $('.open-menu').removeClass('active');
    $('.close-menu').addClass('active');
    $('.menu').addClass('active');
  });

  $('.close-menu').on('click', function () {
    $('.close-menu').removeClass('active');
    $('.menu').removeClass('active');
    $('.open-menu').addClass('active');
  });

  $('.menu a').on('click', function () {
    $('.close-menu').removeClass('active');
    $('.menu').removeClass('active');
    $('.open-menu').addClass('active');
  });

  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  })
});