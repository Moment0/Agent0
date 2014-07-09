// var tabs = function() {
//     $('#tabs').carouFredSel({
// 		circular: false,
// 		items: 1, 		//anzahl der angezeigten Artikel pro Reiter
// 		width: '100%',
// 		auto: false,
//
// 		pagination: {
// 			container: '#pager',
//
// 			anchorBuilder: function( nr ) {
// 				return '<div class="tab"><p>' + $(this).find('h3').text() + '</p></div>';
// 			}
// 		}
//     });
// };

var carousel = function() {
	$('#carousel').carouFredSel({
		prev: '#prev',
		next: '#next',
		circular: true,         // Determines whether the carousel should be circular.
		infinite: true,         // Determines whether the carousel should be infinite. Note: It is possible to create a non-circular, infinite carousel, but it is not possible to create a circular, non-infinite carousel.
		responsive: false,      // Determines whether the carousel should be responsive. If true, the items will be resized to fill the carousel.
		direction: "left",      // The direction to scroll the carousel. Possible values: "right", "left", "up" or "down".
		width: null,            // The width of the carousel. Can be null (width will be calculated), a number, "variable" (automatically resize the carousel when scrolling items with variable widths), "auto" (measure the widest item) or a percentage like "100%" (only applies on horizontal carousels)
		height: null,           // The height of the carousel. Can be null (width will be calculated), a number, "variable" (automatically resize the carousel when scrolling items with variable heights), "auto" (measure the tallest item) or a percentage like "100%" (only applies on vertical carousels)
		align: "center",        // Whether and how to align the items inside a fixed width/height. Possible values: "center", "left", "right" or false.
		padding: null,          // Padding around the carousel (top, right, bottom and left). For example: [10, 20, 30, 40] (top, right, bottom, left) or [0, 50] (top/bottom, left/right).
		synchronise: null,      // Selector and options for the carousel to synchronise: [string selector, boolean inheritOptions, boolean sameDirection, number deviation] For example: ["#foo2", true, true, 0]
		cookie: true,          // Determines whether the carousel should start at its last viewed position. The cookie is stored until the browser is closed. Can be a string to set a specific name for the cookie to prevent multiple carousels from using the same cookie.
		onCreate: null,          // Function that will be called after the carousel has been created. Receives a map of all data.
		scroll : {
            items           : 1,
            duration        : 800,
            pauseOnHover    : true
        }

	});


	$('#wrapper').hover(function() {
		$('#wrapper').find('.arrow-container').clearQueue().animate({
			opacity: 1
		}, 200);
	}, function () {
		$('#wrapper').find('.arrow-container').clearQueue().animate({
			opacity: 0
		}, 200);
	});
};
