// ссылки в header
$('.header-link__item').on('click', function () {
  $('.header-link__item').removeClass('active')
  $(this).addClass('active')
})

// меню на мобилке
$('.navbar-toggler.menu').on('click', function () {
  $('.header-nav').toggle('slow');
})

// корзина в каталоге
$('.catalog-item__basket').on('click', function () {
  $(this).toggleClass('active')
})

// слайдер на главной
$(document).ready(function () {
  var $sliderMain = $('.slider-main');
  var $progressBarMain = $('.slider-main + .container .progress-wrapper .progress');
  var $progressBarLabelMain = $('.slider__label');

  $sliderMain.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

    $progressBarMain
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc);

    $progressBarLabelMain.text(calc + '% completed');
  });

  $sliderMain.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    speed: 400,
    infinite: true,
  });
  $('.slider-main + .container .progress-wrapper .progress-button').append($('.slider-main .slick-prev'))
  $('.slider-main + .container .progress-wrapper .progress-button').append($('.slider-main .slick-next'))
});

// слайдер на главной с отзывами
$(document).ready(function () {
  var $sliderReviews = $('.slider-reviews');
  var $progressBarReviews = $('.slider-reviews + .progress-wrapper .progress');
  var $progressBarLabelReviews = $('.slider__label');

  $sliderReviews.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

    $progressBarReviews
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc);

    $progressBarLabelReviews.text(calc + '% completed');
  });

  $sliderReviews.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 400,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          // arrows: false,
          // dots: true
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '50px',
          // dots: true
        }
      },
    ]
  });
  $('.slider-reviews + .progress-wrapper .progress-button').append($('.slider-reviews .slick-prev'))
  $('.slider-reviews + .progress-wrapper .progress-button').append($('.slider-reviews .slick-next'))
});

// слайдер на главной с акциями
$(document).ready(function () {


  if (window.innerWidth <= 767) {
    var $sliderReviews = $('.slider-stocks');

    $sliderReviews.slick({
      centerMode: true,
      centerPadding: '50px',
      responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            arrows: false,
            // dots: true
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            arrows: false,
            // dots: true
          }
        },
      ]
    });
  }


});

// карточки в каталоге
$('.catalog-item').hover(function () {
  $(this).toggleClass('active')
  $(this).find('.burgundy-100, .burgundy-50').toggleClass('white')
})