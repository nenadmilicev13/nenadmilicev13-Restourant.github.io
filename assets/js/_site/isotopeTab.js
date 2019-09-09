const $ = jQuery.noConflict();

'use strict';
const isotopeTab = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
		$('.gallery__wrapp').isotope({
			itemSelector: '.gallery__item',
		});
		
		$('.gallery__nav-list').click(function(){
			$('gallery__nav-list').removeClass('active');
			$(this).addClass('active');

			var selector = $(this).attr('data-filter');
			$('.gallery__wrapp').isotope({
				filter: selector
			});
			return false;
		});
	}
};


export default isotopeTab;