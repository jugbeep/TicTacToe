console.log ("JS Linked");

$(document).ready(function(){
	console.log('jq ready');

//global varibles 
let unchecked = false;
let win = false;
let count = 0;



$('.cell').on('click', function altXandO() {

count ++; 	
	//check if cell is free
	if ($(this).is('.played')) {
		alert ('This box has been clicked! Try an empty box.')
	}; 
	//alternate x play and o play
	if (count % 2 === 0) {
		$(this).removeClass('.open');
		$(this).addClass('played');
		$(this).html('<p id="x">X</p>');
	};
	if (count % 2 !== 0) {
		$(this).removeClass('.open');
		$(this).addClass('played');
		$(this).html('<p id="o">O</p>');
	};
});
//check for win	

});
;

	
//clear the board
//win alert
//tie alert


