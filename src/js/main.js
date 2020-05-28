$(document).ready(function() {
  calculator();
  navigation();
  menuMobile();
  basketCatalog();
  sliderMain();
  sliderReviews();
  sliderStocks();
  // sliderAdvantage();
  sliderProducts();
  
  breadcrumbs();
  range();
  filterItem();
  buttonBasket();
  goToPage();
  tooltip();
  removeBasketItem();
});

// window.onresize = function() {
//   menuMobile();
//   sliderMain();
//   sliderReviews();
//   calculator();
//   sliderStocks();
// };

// ссылки в навигации
function navigation() {
  $('.header-link__item').on('click', function () {
    $('.header-link__item').removeClass('active')
    $(this).addClass('active')
  })
}

// меню на мобилке
function menuMobile() {
  // $('.navbar-toggler.menu').on('click', function () {
  //   $('.header-nav').toggle('slow');
  // })
  let heightNav = $('.header-nav').height()
  let heightHeader = $('.header').height()
  $('.header-nav').css('top', -heightNav)

  $('.navbar-toggler.menu').on('click', function () {
    $('.header-nav').toggleClass('active')
    if ($('.header-nav').hasClass('active')) {
      $('.header-nav').css('top', heightHeader + 20)
    } else {
      $('.header-nav').css('top', -heightNav)
    }
  })
}

// корзина в каталоге
function basketCatalog() {
  $('.catalog-item__basket').on('click', function () {
    $(this).toggleClass('active')
  })
}

// слайдер на главной
function sliderMain() {
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
}

// слайдер на главной с отзывами
function sliderReviews() {
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
}

// слайдер на главной с акциями
function sliderStocks() {
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
}

// слайдер на странице со списком товаров - доставка
// function sliderAdvantage() {
//   if (window.innerWidth <= 767) {
//     var $sliderReviews = $('.slider-advantage');

//     $sliderReviews.slick({
//       centerMode: true,
//       centerPadding: '50px',
//       responsive: [{
//           breakpoint: 991,
//           settings: {
//             slidesToShow: 1,
//             arrows: false,
//           },
//         },
//         {
//           breakpoint: 767,
//           settings: {
//             slidesToShow: 1,
//             centerMode: true,
//             arrows: false,
//           }
//         },
//       ]
//     });
//   }
// }

// слайдер на странице со списком товаров - доставка

function sliderProducts() {
  var $sliderProducts = $('.slider-products');
  
  $sliderProducts.slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 400,
    arrows: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          // arrows: false,
          // dots: true
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
          centerMode: true,
          centerPadding: '50px',
          // dots: true
        }
      },
    ]
  });
}

// карточки в каталоге
function cardCatalog() {
  $('.catalog-item').hover(function () {
    $(this).toggleClass('active')
    $(this).find('.burgundy-100, .burgundy-50').toggleClass('white')
  })
}

// калькулятор
function calculator() {

  let h = $('.calculator-wrapper').height()
  $('.calculator-wrapper').css('height', -h)

  $('.calculator-title').on('click', function () {
    $('.calculator').toggleClass('active')
    // $('body').toggleClass('overflow-hidden')
    if ($('.calculator').hasClass('active')) {
      $('.calculator-wrapper').css('height', h)
    } else {
      $('.calculator-wrapper').css('height', -h)
    }
  })


}

// хлебные крошки
function breadcrumbs() {
  $('.breadcrumb-item').on('click', function() {
    $('.breadcrumb-item').removeClass('active')
    $(this).addClass('active')
  })
}

// custom range
function range() {
  var
      val = $('.custom-range').val();
  $('.custom-range').css({
      'background': '-webkit-linear-gradient(left ,rgb(130, 76, 79) 0%,rgb(130, 76, 79) ' + val + '%,#DFC3C7 ' + val +
          '%, #DFC3C7 100%)'
  });
}

function filterItem() {
  $('.filter-item').on('click', function() {
    $('.filter-item').removeClass('active')
    $(this).toggleClass('active')
    $(this).toggleClass(function(){
      return $(this).is('.up, .down') ? 'up down' : 'up';
    })
    return;
  })
  $('.filter-display__item').find('.icon').on('click', function() {
    $('.filter-display__item').find('.icon').removeClass('active')
    $(this).addClass('active')
  })
  $('.filter-fixed').find('.icon').on('click', function() {
    $(this).toggleClass('active')
  })
}

// корзина оформления заказа
function buttonBasket() {
  $('.checkout-button__basket').on('click', function() {
    $(this).toggleClass('active')
  })
}

// двойной клик на корзину
function goToPage() {
  $('.checkout-button__basket').on('dblclick', function() {
    document.location.href = "../index.html";
  })
}
// tooltip
function tooltip() {
  $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' })
}

// удаление позиции из корзины
function removeBasketItem() {
  $('.basket-remove').on('click', function() {
    $(this).parent().hide('slow');
  })
}