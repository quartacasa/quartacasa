$(document).ready(function () {
  // Fix header background color bug when refresh page
  if ($(window).scrollTop() > 80) {
    $('header').addClass('fixed');
  } else {
    $('header').removeClass('fixed');
  }

  $('[data-js="contact-form"]').submit(function(evt) {
    evt.preventDefault();

    $name = $('[data-js="input-name"]');
    $email = $('[data-js="input-email"]');
    $phone = $('[data-js="input-phone"]');
    $message = $('[data-js="input-message"]');

    var payload = {
      name: $name.val(),
      email: $email.val(),
      phone: $phone.val(),
      message: $message.val()
    };

    var url = "https://quartacasa-functions.netlify.app/.netlify/functions/populate-spreadsheet";
    var table = "1fWAEdEgX9Rgj9sVbcVRJz8KPQM42viVRUlu938WBdoY";

    axios
      .post(url, { id: table, row: payload })
      .then(function() {
        console.info("Informação enviada com sucesso.");
      })
      .catch(function(err) {
        console.error(err);
      })
  });

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

  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 80) {
      $('header').addClass('fixed');
    } else {
      $('header').removeClass('fixed');
    }
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
