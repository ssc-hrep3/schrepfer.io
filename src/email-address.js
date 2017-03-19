var schrepfer = schrepfer || {};

schrepfer.emailAddress = (function() {
	'use strict';
	
	var characters = 'akmKe95U_MWJroX.Z+BtcTPsxnFVz17-C8SpywfvQNh4R0LGHq36gduYDj2EIAibO';
	var magicNumber = 415;
	
	function generateCharacters(string) {
		var result = "";
		for(var i = 0; i < string.length; i++) {
			result += shiftCharacter(string[i]);
		}
		return result;
	}

	function shiftCharacter(character) {
		if(characters.indexOf(character) === -1) {
			console.log("Undefined character: " + character);
		}
		var index = characters.indexOf(character);
		var newIndex = (index + magicNumber) % (characters.length - 1);
		
		return characters[newIndex];
	}
	
	return {
		firstPart: generateCharacters,
		lastPart: generateCharacters
	};

})();