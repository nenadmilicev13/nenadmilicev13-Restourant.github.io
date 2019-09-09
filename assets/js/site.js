
import Sliders from './_site/sliders';
import Ajax from './_site/ajax';
import IsotopeTab from './_site/isotopeTab';
import HeaderFixed from './_site/headerFixed';
import NavBtn from './_site/navBtn';

jQuery(function () {
	// Slick Slider
	Sliders.init();

	// Ajax
	Ajax.init();

	// Isotope
	IsotopeTab.init();

	// HeaderFixed
	HeaderFixed.init();

	// NavBtn
	NavBtn.init();

	console.log('hello');
});
