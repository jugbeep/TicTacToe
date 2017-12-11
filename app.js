console.log ("JS Linked");

$(document).ready(function(){
	console.log('jq ready');

//global varibles 

let count = 0;


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

	if ($('#cell1').hasClass('playedX') && $('#cell2').hasClass('playedX') && $('#cell3').hasClass('playedX') === true) {
		alert('X Wins!');
	} if ($('#cell4').hasClass('playedX') && $('#cell5').hasClass('playedX') && $('#cell6').hasClass('playedX') === true) {
		alert('X Wins!');
	} if ($('#cell7').hasClass('playedX') && $('#cell8').hasClass('playedX') && $('#cell9').hasClass('playedX') === true) {
		alert('X Wins!');
	} if ($('#cell1').hasClass('playedX') && $('#cell4').hasClass('playedX') && $('#cell7').hasClass('playedX') === true) {
		alert('X Wins!');
	} if ($('#cell2').hasClass('playedX') && $('#cell5').hasClass('playedX') && $('#cell8').hasClass('playedX') === true) {
		alert('X Wins!');
	} if ($('#cell3').hasClass('playedX') && $('#cell6').hasClass('playedX') && $('#cell9').hasClass('playedX') === true) {
		alert('X Wins!');
	} if ($('#cell7').hasClass('playedX') && $('#cell5').hasClass('playedX') && $('#cell3').hasClass('playedX') === true) {
		alert('X Wins!')
	} if ($('#cell1').hasClass('playedX') && $('#cell5').hasClass('playedX') && $('#cell9').hasClass('playedX') === true) {
		alert('X Wins!')
	} 
//check for O win

	if ($('#cell1').hasClass('playedO') && $('#cell2').hasClass('playedO') && $('#cell3').hasClass('playedO') === true) {
		alert('O Wins!');
	} if ($('#cell4').hasClass('playedO') && $('#cell5').hasClass('playedO') && $('#cell6').hasClass('playedO') === true) {
		alert('O Wins!');
	} if ($('#cell7').hasClass('playedO') && $('#cell8').hasClass('playedO') && $('#cell9').hasClass('playedO') === true) {
		alert('O Wins!');
	} if ($('#cell1').hasClass('playedO') && $('#cell4').hasClass('playedO') && $('#cell7').hasClass('playedO') === true) {
		alert('O Wins!');
	} if ($('#cell2').hasClass('playedO') && $('#cell5').hasClass('playedO') && $('#cell8').hasClass('playedO') === true) {
		alert('O Wins!');
	} if ($('#cell3').hasClass('playedO') && $('#cell6').hasClass('playedO') && $('#cell9').hasClass('playedO') === true) {
		alert('O Wins!');
	} if ($('#cell7').hasClass('playedO') && $('#cell5').hasClass('playedO') && $('#cell3').hasClass('playedO') === true) {
		alert('O Wins!');
	} if ($('#cell1').hasClass('playedO') && $('#cell5').hasClass('playedO') && $('#cell9').hasClass('playedO') === true) {
		alert('O Wins!');
	};

});
});





















	
// 	if ($('.playedX') && win1 === true) {
// 		alert('X Wins');
// 	} if ($('.playedX') && win2 === true) {
// 		alert('X Wins');
// 	} else if ($(win3).hasClass('playedX')) {
// 		alert('X Wins');	
// 	} else if ($(win4).hasClass('playedX')) {
// 		alert('X Wins');
// 	} else if ($(win5).hasClass('playedX')) {
// 		alert('X Wins');
// 	} else if ($(win6).hasClass('playedX')) {
// 		alert('X Wins');
// 	} else if ($(win7).hasClass('playedX')) {
// 		alert('X Wins');
// 	} else if ($(win8).hasClass('playedX')) {
// 		alert('X Wins');
// // check if O wins
// 	} if ($(win1).hasClass('playedO')) {
// 		alert('O Wins');
// 	} if ($(win2).hasClass('playedO')) {
// 		alert('O Wins');
// 	} if ($(win3).hasClass('playedO')) {
// 		alert('O Wins');
// 	} if ($(win4).hasClass('playedO')) {
// 		alert('O Wins');
// 	} if ($(win5).hasClass('playedO')) {
// 		alert('O Wins');
// 	} if ($(win6).hasClass('playedO')) {
// 		alert('O Wins');
// 	} if ($(win7).hasClass('playedO')) {
// 		alert('O Wins');
// 	} if ($(win8).hasClass('playedO')) {
// 		alert('O Wins');
// 	};



// });
// });





	

