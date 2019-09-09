const $ = jQuery.noConflict();

'use strict';
const HeaderFixed = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
        if ($(window).width() > 1024) {
            $(window).on('scroll', function() {
                if ($(window).scrollTop() > 100) {
                    $('.main-header').addClass('header-fixed');
                } else {
                    $('.main-header').removeClass('header-fixed');
                }
            });
        }
	}
};

export default HeaderFixed;