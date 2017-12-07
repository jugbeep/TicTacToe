console.log ("JS Linked");

$(document).ready(function(){
	console.log('jq ready');
		
// count the board //
// let counter = 0;
// $('board').on('click', '.cell', function(){
// 	counter +1;
// });	
// console.log(counter)
// });




















////working but buggy/////
	var count = 1;

	$('.cell').click(function() {
		$(this).addClass("clicked");
	});

	$('.board').click(function(){
		count += 1;


		if (count % 2 === 0) {
			$('.cell').click(function () {
			$(this).html('<p id="x">X</p>')});
		} if (count % 2 !== 0) {
			$('.cell').click(function () {
			$(this).html('<p id="o">O</p>')});
		} if (count <= 9) {
				return ("count >= 9")};
		});

});

