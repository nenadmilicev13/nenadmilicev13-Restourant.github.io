const $ = jQuery.noConflict();

'use strict';
const navBtn = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
        var mainHeaderBtn = $('.js-main-header-btn');
		var mainNav = $('.js-main-nav');
		var mainNavLink = $('.js-main-nav-link');
		var dropMenu = $('.js-drop-menu');
		var dropMenuLink = $('.js-drop-menu-link');
		var dropMenuTwo = $('.js-drop-menu2');
		var mainNavLinkMega = $('.js-main-nav-link-mega');
		var megaMenu = $('.js-mega-menu');

		mainHeaderBtn.on('click', function() {
			mainNav.slideToggle();
		});

		mainNavLink.on('click', function(){
			var $this = $(this);
			var thisDropMenu = $this.siblings(dropMenu);
			thisDropMenu.slideToggle();
			dropMenu.not(thisDropMenu).slideUp();
		});

		dropMenuLink.on('click', function(){
			var $this = $(this);
			var thisDropMenuTwo = $this.siblings(dropMenuTwo);
			thisDropMenuTwo.slideToggle();
			dropMenuTwo.not(thisDropMenuTwo).slideUp();
		});
		mainNavLinkMega.on('click', function(){
			megaMenu.slideToggle();
		});
	}
};

export default navBtn;