const $ = jQuery.noConflict();

'use strict';
const Sliders = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
		var sliderBanner = $('.js-slider-banner');
		var cards = $('.js-cards');
		var testimonialsThumb = $('.js-testimonials-thumb');
		var testimonialsContent = $('.js-testimonials-content');

		// banner slider
		sliderBanner.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			fade: true,
  			cssEase: 'linear',
			arrows: false,
			autoplay: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});

		//cards slider 
		cards.slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: true,
			arrows: false,
			// autoplay: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});

		//Testimonials slider 

		testimonialsContent.slick({
			centerMode: true,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			autoplay: true,
			slidesToShow: 1,
			fade: true
		});
	}
};

export default Sliders;
