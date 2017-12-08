console.log ("JS Linked");

$(document).ready(function(){
	console.log('jq ready');

//global varibles 

let count = 0;
let cell2 = $('#cell2')

$('.cell').on('click', function() {

count ++; 	
	//check if cell is free
	if ($(this).is('.played')) {
		return;
	}; 
	//alternate x play and o play
	if (count % 2 === 0) {
		$(this).removeClass('.open');
		$(this).addClass('played');
		$(this).addClass('playedO');
		$(this).html('O');
	};
	if (count % 2 !== 0) {
		$(this).removeClass('.open');
		$(this).addClass('played');
		$(this).addClass('playedX');
		$(this).html('X');
	};
});
//check for win
function checkForWin() {
 	if (cell2.hasClass('playedO') == true ) { //&& $('#cell2').hasClass('O') && $('cell3').hasClass('O')) {
 		console.log('O Wins!');
 	} 

}	
checkForWin();
});

;

	
//clear the board
//win alert
//tie alert


