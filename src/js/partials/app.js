$(document).ready(function(){

    screenSize();

    //toggle language
    $('.lang-item').click(function(){
        $('.lang-item').removeClass('active');
        $(this).addClass('active');
    });

    $('.slider-item-wrapper').slick({
        arrows: false,
        dots: false,
        fade: true,
        speed: 500,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000
    });

    var scenarioSlick = $('.scenario-slider');
    scenarioSlick.slick();

    scenarioSlick.mousewheel(function(e) {
        e.preventDefault();

        if (e.deltaY < 0) {
            $(this).slick('slickNext');
        }
        else {
            $(this).slick('slickPrev');
        }
    });

});

$(window).scroll(function(){
    var scrennScroll = $(this).scrollTop();

    if(scrennScroll >= 115){
        $('#main-menu').addClass('fix-menu');
    } else {
        $('#main-menu').removeClass('fix-menu');
    }
});

$(window).resize(screenSize);

function screenSize() {
    $('.laptop-block').height($('.laptop-block').width() / 1.79);
    $('.laptop-screen').height($('.laptop-screen').width() / 1.59);
}