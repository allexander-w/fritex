$(document).ready(function(){

    $('.production__slider').slick({
        dots: true,
        nextArrow: `<button class="btn production__arrow-next"> <img src="./img/index/production/next.svg" alt="next"> </button>`,
        prevArrow: `<button class="btn production__arrow-prev"> <img src="./img/index/production/prev.svg" alt="prev"> </button>`,
    });

    $('.innovation__slider-one').slick({
        dots: true,
        arrows: false
    });

    $('.innovation__slider-two').slick({
        dots: true,
        arrows: false
    });

    $('.about__slider').slick({
        dots: true,
        // arrows: false,
        nextArrow: `<button class="btn about__arrow-next"> <img src="./img/index/production/next.svg" alt="next"> </button>`,
        prevArrow: `<button class="btn about__arrow-prev"> <img src="./img/index/production/prev.svg" alt="prev"> </button>`,
    });

});