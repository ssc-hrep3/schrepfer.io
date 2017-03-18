(function(crypto) {
	'use strict';

	var alphabets = {};
	alphabets.uppercase = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789',
	alphabets.full = 'AaBbCcDdEeFfGgHhiJjKkLMmNnPpQqRrSsTtUuVvWwXxYyZz23456789';
	
	// biased to regular characters to prevent very complicated passwords:
	alphabets.fullWithSpecialCharacters = alphabets.full + alphabets.full + alphabets.full + alphabets.full + alphabets.full + '._@+"*ç%/()[]{}#§$!?';
	
	var button = document.querySelector('.secure-password-button');
	var output = document.querySelector('.secure-password-output');
	
	if(crypto) {
		button.addEventListener('click', function() {
			output.textContent = crypto.secure(alphabets.fullWithSpecialCharacters, 25, 5);
			output.className += ' visible';
			selectElement(output);
		});
	}
	else {
		button.parentNode.removeChild(button);
		output.parentNode.removeChild(output);
	}
	
	function selectElement(element) {
		var range = document.createRange();
		range.selectNodeContents(element);
		var selection = window.getSelection();
		selection.removeAllRanges();
		selection.addRange(range);
	}
	
})(schrepfer.crypto);