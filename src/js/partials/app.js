$(document).ready(function(){

	$('#test').click(function () { 
		$(this).css('color', '#59ac86');
		$(this).css('borderColor', '#59ac86');
		$('#ok').html('JS + jQuery are ready ☼')
				.css('color', '#59ac86')
				.css('textDecoration', 'underline');
	});

});