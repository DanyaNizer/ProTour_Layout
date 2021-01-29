$(document).ready(function () {
	var HeaderTop = $('#header').offset().top;

	$(window).scroll(function () {
		if ($(window).scrollTop() > HeaderTop) {
			$('#header').css({ position: 'fixed', top: '0px' });
		} else {
			$('#header').css({ position: 'static' });
		}
	});
});

"use strict";


// загрузочный экран
(function ($) {
	$(window).load(function () {
		$("#loader").fadeOut("slow", function () {
			$("#preloader").delay(3500).fadeOut("slow");
		});
	})
})(jQuery);