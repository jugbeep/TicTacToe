console.log ("JS Linked");

$(document).ready(function(){
	console.log('jq ready');
		var count = 0;

		$('.board').click(function(){
			count += 1;

			if (count % 2 === 0) {
				$('.cell').click(function () {
				$(this).html('<p>X</p>')});
			} else {
				$('.cell').click(function () {
				$(this).html('<p>O</p>');
			});
		};
	});
});