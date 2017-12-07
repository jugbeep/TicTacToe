console.log ("JS Linked");

$(document).ready(function(){
	console.log('jq ready');
		
// count the board //
	var count = 0;

	$('.cell').click(function() {
		$(this).addClass("clicked");
	});

	$('.board').click(function(){
		count += 1;

		if 
		if (count >= 9) {
				return ("count <= 9");
		} if (count % 2 === 0) {
			$('.cell').click(function () {
			$(this).html('<p>X</p>')});
		} if (count % 2 !== 0) {
			$('.cell').click(function () {
			$(this).html('<p>O</p>')});
		}
	});
	

});

