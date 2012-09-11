(function($){
	$(document).ready(function() {

		// First test
		//this is the function they gave used to generate the different sized boxes in the freetile grid.

		var fixedSize = 3;

		for (i=0;i<30;i++) {
			var w = 41 * (parseInt(fixedSize) +3),
				h = 40 * (parseInt(fixedSize) +3);
			$('<div class="element" style="color:#fff;"></div>').width(w).height(h).appendTo('.first');
		}

		$('#fb_productsMenuBody').children().each(function()
		{
			$(this).freetile({
				animate: true,
				elementDelay: 40
			});
		});
	});
})(jQuery)
				
