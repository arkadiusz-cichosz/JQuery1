$(function() {
	let spanSelector = $('span');
	let paragraphs = $('p');
	
	spanSelector.each(function(index, element) {
		if(index % 2 == 0) {
			$(element).css('color','red');
		}
	});

	paragraphs.each(function(index, element) {
		let extraButton = '<button class=\"btn\" data-tmp=\"' + index + '\">Click me</button>';
		$(element).append(extraButton);
	});

	$('button').click(function() {
		alert($(this).attr('data-tmp'));
	});
});