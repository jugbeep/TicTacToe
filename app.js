console.log ("JS Linked");

$(document).ready(function(){
	console.log('jq ready');

//global varibles 
let unchecked = false;
let win = false;
let count = 0;

let cell1 = $('#cell1');

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
		$(this).addClass('X');
		$(this).html('X');
	};
	if (count % 2 !== 0) {
		$(this).removeClass('.open');
		$(this).addClass('played');
		$(this).addClass('O');
		$(this).html('O');
	};
});
//check for win
function CheckForWin() {
 	if ( cell1.hasClass('O')) { //&& $('#cell2').hasClass('O') && $('cell3').hasClass('O')) {
 		alert ('O Wins!');
 	} 
}	
CheckForWin();
});
;

	
//clear the board
//win alert
//tie alert


