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

    $('.about__slider').slick({
        dots: true,
        arrows: false
    });


	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});

});