$(function() {
	let span_selector = $('span');
	span_selector.each(function(index, element) {
		if(index % 2 == 0) {
			$(element).css('color','red');
		}
	});
});