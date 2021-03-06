$(document).ready(function () {
  scrollTop();
  // calculator();
  navigation();
  menuMobile();
  sliderMain();
  basketCatalog();
  sliderReviews();
  sliderStocks();
  sliderDelivery();
  // sliderAdvantage();
  sliderProducts();
  // cardCatalog();
  breadcrumbs();
  range();
  filterItem();
  buttonBasket();
  goToPage();
  tooltip();
  removeBasketItem();
  deleteImage();
  filterList();
  filterMobile();
  menu();
  map();
});

// resize
$(window).on('resize', function () {
  $('.slider-reviews + .progress-wrapper .progress-button').append($('.slider-reviews .slick-prev'))
  $('.slider-reviews + .progress-wrapper .progress-button').append($('.slider-reviews .slick-next'))
  // menuMobile();
});

// ссылки в навигации
function navigation() {
  $('.header-link__item').on('click', function () {
    $('.header-link__item').removeClass('active')
    $(this).addClass('active')
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
          arrows: false,
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
  var $sliderStocks = $('.slider-stocks');
  var $sliderStocksModal = $('.slider-stocks-modal');

  $sliderStocks.slick({
    slidesToShow: 3,
    arrows: false,
    centerMode: false,
    centerPadding: '0px',
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false,
          centerMode: false,
          centerPadding: '0px',
          // dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: '50px',
          centerMode: true,
          arrows: false,
          // dots: true
        }
      },
    ]
  });

  $sliderStocksModal.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '50px',
    useTransform: false,
    variableWidth: true,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          arrows: false,
          // centerMode: false,
          // centerPadding: '0px',
          // dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: '50px',
          centerMode: true,
          arrows: false,
          // dots: true
        }
      },
    ]
  });

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
  var $sliderProductsSecond = $('.slider-products-second');

  $sliderProducts.slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: [{
        breakpoint: 991,
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
      }, {
        breakpoint: 449,
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

  $sliderProductsSecond.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          // centerMode: true,
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
      }, {
        breakpoint: 449,
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
  $('.breadcrumb-item').on('click', function () {
    $('.breadcrumb-item').removeClass('active')
    $(this).addClass('active')
  })
}

// custom range
function range() {
  var val = $('.custom-range').val();
  $('.custom-range').css({
    'background': '-webkit-linear-gradient(left ,rgb(130, 76, 79) 0%,rgb(130, 76, 79) ' + val + '%,#DFC3C7 ' + val +
      '%, #DFC3C7 100%)'
  });
}

function filterItem() {
  $('.filter-item').on('click', function () {
    $('.filter-item').removeClass('active')
    $(this).toggleClass('active')
    $(this).toggleClass(function () {
      return $(this).is('.up, .down') ? 'up down' : 'up';
    })
    return;
  })
  $('.filter-display__item').find('.icon').on('click', function () {
    $('.filter-display__item').find('.icon').removeClass('active')
    $(this).addClass('active')
  })
  $('.filter-fixed').find('.icon').on('click', function () {
    $(this).toggleClass('active')
  })
}

// корзина оформления заказа
function buttonBasket() {
  $('.checkout-button__basket').on('click', function () {
    $(this).toggleClass('active')
  })
}

// двойной клик на корзину
function goToPage() {
  $('.checkout-button__basket ').on('dblclick', function () {
    document.location.href = "basket.html";
  })
  $('.catalog-item__basket ').on('dblclick', function () {
    document.location.href = "basket.html";
  })
}

// tooltip
function tooltip() {
  $('[data-toggle="tooltip"]').tooltip({
    boundary: 'window'
  })
}

// удаление позиции из корзины
function removeBasketItem() {
  $('.basket-remove').on('click', function () {
    $(this).parent().hide('fast');
  })
}

// удаление картинки из модалки
function deleteImage() {
  $('.icon.remove').on('click', function () {
    $(this).parent().hide()
  })
}

// слайдер на доставку 
function sliderDelivery() {
  if (window.innerWidth <= 991) {
    var $sliderReviews = $('.slider-delivery');

    $sliderReviews.slick({
      // centerMode: true,
      // centerPadding: '50px',
      responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            // centerMode: true,
            arrows: false,
            dots: true
          }
        },
      ]
    });
  }
}

// scroll top
function scrollTop() {
  // появление/затухание кнопки #back-top
  $(function () {
    // прячем кнопку #back-top
    $(".top").hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".top").fadeIn();
      } else {
        $(".top").fadeOut();
      }
    });
    // при клике на ссылку плавно поднимаемся вверх
    $(".top").click(function () {
      $("body,html").animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });
}

// меню на мобилке
function menuMobile() {
  // let heightNav = $('.header-nav').height() + 40
  // let heightHeader = $('.header').height()
  // $('.header-nav').css('top', -heightNav)
  // $('.header-nav').css('bottom', 'auto')
  // $('.header-nav').css('opacity', 1)


  // $('.navbar-toggler.menu').on('click', function () {
  //   $('.header-nav').toggleClass('active')
  //   if ($('.header-nav').hasClass('active')) {
  //     $('.header-nav').css('opacity', 1)
  //     $('.header-nav').css('top', heightHeader + 20)
  //     $('.header-nav').css('bottom', 0)
  //     $('.top').hide()
  //     $('body').addClass('off-scroll')
  //   } else {
  //     $('.header-nav').css('opacity', 0)
  //     $('.header-nav').css('top', -heightNav)
  //     $('body').removeClass('off-scroll')
  //   }
  // })

  $('.navbar-toggler.menu').on('click', function () {
    $('.header-nav').animate({

    }).toggleClass('active')
    if ($('.header-nav').hasClass('active')) {
      $('body').addClass('off-scroll')
      $('.top').hide()
    } else {
      $('body').removeClass('off-scroll')
      $('.top').show()
    }
  })

}

// menu
function menu() {

  // let heightNav = $('.header-nav').height() + 40
  let scrollTop = $(this).scrollTop();

  if ($(window).scrollTop() > 52) {
    if ($(window).innerWidth() >= 992) {
      $(".header").css({
        'position': 'sticky',
        'left': '0px',
        'right': '0px',
        'top': '0px',

        // 'top': (scrollTop - heightNav),
      });
    } else {
      $(".header").css({
        'position': 'sticky',
        'left': '0px',
        'right': '0px',
        // 'top': scrollTop,
      });
      $('.header-nav').css({
        // 'top': -heightNav,
        // 'position': 'fixed',
      })
    }
  } else {
    $(".header").css({
      'position': 'sticky',
      'top': '0px',
    });
  }

}

// scroll menu
$(window).scroll(function () {
  menu();
});

// фильтр Список - Таблица
function filterList() {
  $('.icon.list').on('click', function () {
    $('#table').hide()
    $('#list').show()
  })
  $('.icon.table').on('click', function () {
    $('#list').hide()
    $('#table').show()
  })
}

// фильтр на мобилке
function filterMobile() {
  $('.filter-fixed__button').on('click', function () {
    $('.filter-fixed__content').addClass('active')
  })
  $('.filter-fixed__close').on('click', function () {
    $('.icon.filter').removeClass('active')
    $('.filter-fixed__content').removeClass('active')
  })
}

// $('.dropdown').hover(function() {
//   $(this).find('.dropdown-content', function() {
//     if ($(this).on('mouseover')) {
//       $(this).addClass('active')
//     } else {
//       $(this).removeClass('active')
//     }
//   }).stop(true, true).delay(100).fadeIn(500).addClass('active');
// }, function() {
//   $(this).find('.dropdown-content').stop(true, true).delay(100).fadeOut(500).removeClass('active');
// });


// карты
function map() {

}