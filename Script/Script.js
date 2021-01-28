
"use strict";


// загрузочный экран
(function ($) {
	$(window).load(function () {
		$("#loader").fadeOut("slow", function () {
			$("#preloader").delay(3500).fadeOut("slow");
		});
	})
})(jQuery);