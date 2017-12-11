console.log ("JS Linked");

$(document).ready(function(){
	console.log('jq ready');

//global varibles 

let count = 0;

//wins
let win1 = $('#cell1') && $('#cell2') && $('#cell3');
let win2 = $('#cell4') && $('#cell5') && $('#cell6');
let win3 = $('#cell7') && $('#cell8') && $('#cell9');
let win4 = $('#cell1') && $('#cell4') && $('#cell7');
let win5 = $('#cell2') && $('#cell5') && $('#cell8');
let win6 = $('#cell3') && $('#cell6') && $('#cell9');
let win7 = $('#cell7') && $('#cell5') && $('#cell3');
let win8 = $('#cell1') && $('#cell5') && $('#cell9');

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


//check for X win

	
	if ($(win1).hasClass('playedX')) {
		alert('X Wins');
	} else if ($(win2).hasClass('playedX')) {
		alert('X Wins');
	} else if ($(win3).hasClass('playedX')) {
		alert('X Wins');	
	} else if ($(win4).hasClass('playedX')) {
		alert('X Wins');
	} else if ($(win5).hasClass('playedX')) {
		alert('X Wins');
	} else if ($(win6).hasClass('playedX')) {
		alert('X Wins');
	} else if ($(win7).hasClass('playedX')) {
		alert('X Wins');
	} else if ($(win8).hasClass('playedX')) {
		alert('X Wins');
// check if O wins
	// } if ($(win1).hasClass('playedO')) {
	// 	alert('O Wins');
	// } if ($(win2).hasClass('playedO')) {
	// 	alert('O Wins');
	// } if ($(win3).hasClass('playedO')) {
	// 	alert('O Wins');
	// } if ($(win4).hasClass('playedO')) {
	// 	alert('O Wins');
	// } if ($(win5).hasClass('playedO')) {
	// 	alert('O Wins');
	// } if ($(win6).hasClass('playedO')) {
	// 	alert('O Wins');
	// } if ($(win7).hasClass('playedO')) {
	// 	alert('O Wins');
	// } if ($(win8).hasClass('playedO')) {
	// 	alert('O Wins');
	// };



};
});
});



	
//clear the board
// //win alert
// //tie alert

// 	if ($('.cell').hasClass('playedO')) {
// 		alert('X wins!')
// 	}
	

