$('.header-link__item').on('click', function () {
    $('.header-link__item').removeClass('active')
    $(this).addClass('active')
})

$(document).ready(function () {
    var $slider = $('.slider');
    var $progressBar = $('.progress');
    var $progressBarLabel = $('.slider__label');

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc);

        $progressBarLabel.text(calc + '% completed');
    });

    $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400
    });
    $('.progress-button').append($('.slick-prev'))
    $('.progress-button').append($('.slick-next'))
});