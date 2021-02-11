// Липкий header
$(document).ready(function() {
    var HeaderTop = $('#header').offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() > HeaderTop) {
            $('#header').css({ position: 'fixed', top: '0px' });
        } else {
            $('#header').css({ position: 'static' });
        }
    });
});




// Загрузочный экран
$(function() {
    $('#preloader').delay(3500).fadeOut('slow');
});



// Дальше слайдер
$('.slick__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    lazyLoad: 'ondemand',
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false
            }
        },
        {
            breakpoint: 320,
            settings: {
                arrows: false
            }
        }
    ]
});