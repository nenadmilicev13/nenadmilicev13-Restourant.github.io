const $ = jQuery.noConflict();

'use strict';
const Ajax = {
	

	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {

        $.ajax ({
            url: 'menu.json',
            type: 'get',
            dataType: 'json',
            cache: 'false',
            success: function(data) {
                let list = $('.js-name-list');

                $.each(data, function(index, item) {
                    function addData() {
                        const html = `
                        <div class="menu__box-item">
                            <div class="menu__box-item-wrapp">
                                <div class="menu__box-item-image">
                                    <img src="${item.image}" alt="" srcset="">
                                </div>
                                <div class="menu__box-item-info">
                                    <a href="javascript:;"><h3 class="food-name">${item.name}</h3></a>
                                    <span class="food-ingredients">Mushroom / Garlic / Veggies</span>
                                </div>
                            </div>
                            <span class="menu__box-item-price">${item.price}$</span>
                        </div>
    
                        `;
                        
                        list.append(html);
                    };

                    addData();

                    let menuLink = $('.js-menu-link');

                    menuLink.on('click', function() {
                        let $this = $(this);
                        let thisMenu = $this.attr('data-menu');

                        if (index == 0) {
                            list.empty();
                        }

                        if ( ( thisMenu == item.cat ) || ( thisMenu == 'all' ) ) {
                            addData();
                        }
                    });
                });
            }
            
        });

	}
};

export default Ajax;