// Липкий header
$(window).on('scroll', function() {

    var y = $(window).scrollTop(),
        topBar = $('.myheader');
    topPad = $('.header__top-info-bg');

    if (y > 150) {
        topBar.addClass('sticky');
        // topPad.addClass('sticpad');
    } else {
        topBar.removeClass('sticky');
        // topPad.removeClass('sticpad');
    }

});




// загрузочный экран
$(function() {
    $('#preloader').delay(1500).fadeOut('slow');
});



// Дальше слайдер
$('.slick__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
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



$('.rewies__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
})


$(document).ready(function() {
    $('a[href^="#down"], *[data-href^="#down"]').on('click', function(e) {
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
});