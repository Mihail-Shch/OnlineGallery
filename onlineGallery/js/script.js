
$(document).ready(function(){

   $('.works-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: 0,
        speed: 700,
        touchThreshold: 10,
        autoplay: false,
   });

    $("a.nav__link").on("click", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({
            scrollTop: top
        }, 800);
        $('.nav').removeClass('navActive');
        $('.burger__menu').removeClass('burger__active');
        $('#activeContainer').removeClass('TitleActive');
    });

    $('.header__burger').on("click", function (event) {

        event.preventDefault();
        $('.nav').toggleClass('navActive');
        $('#activeContainer').toggleClass('TitleActive');
        $('.burger__menu').toggleClass('burger__active');

    });

});
