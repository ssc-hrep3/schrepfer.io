(function(crypto) {
	'use strict';

	var alphabets = {};
	alphabets['alphabet-uppercase'] = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789',
	alphabets['alphabet-complete'] = 'AaBbCcDdEeFfGgHhiJjKkLMmNnPpQqRrSsTtUuVvWwXxYyZz23456789';
	
	// biased to regular characters to prevent very complicated passwords:
	alphabets['alphabet-special'] = 
		alphabets['alphabet-complete'] + alphabets['alphabet-complete'] +
		alphabets['alphabet-complete'] + '._@+"*ç%/()[]{}#§$!?';
	
	var button = document.querySelector('.secure-password-button');
	var output = document.querySelector('.secure-password-output');
	var options = document.querySelector('.secure-password-options');
	var initial = true;
	
	if(crypto) {
		for(var i = 0; i < options.children.length; i++) {
			var child = options.children[i];
			if(child.className.indexOf('uppercase') !== -1) {
				addClass(child, 'selected');
			}
			(function(child) {
				child.addEventListener('click', function() {
					for(var j = 0; j < child.parentNode.children.length; j++) {
						var sibling = child.parentNode.children[j];
						if(child !== sibling) {
							sibling.className = sibling.className.replace(/ selected|selected /g, '');
						}
					}
					addClass(child, 'selected');
					displayPassword(false);
				});
			})(child);
		}
		var initial = true;
		
		button.addEventListener('click', function() {
			displayPassword(initial);
			initial = false;
		});
	}
	else {
		button.parentNode.removeChild(button);
		output.parentNode.removeChild(output);
	}
	
	function displayPassword(initial) {
		var selectedAlphabet = 'alphabet-uppercase';
		for(var k = 0; k < options.children.length; k++) {
			var child = options.children[k];
			var className = child.className;
			
			if(className.match(/\bselected\b/)) {
				var match = className.match(/alphabet-[^\s]+/);
				selectedAlphabet = match[0];
			}
		}
		
		addClass(options, 'visible');
		output.textContent = crypto.secure(alphabets[selectedAlphabet], 25, 5);
		addClass(output, 'visible');
		if(initial) {
			window.setTimeout(function() {
				selectElement(output);
			}, 300);
		}
		else {
			selectElement(output);
		}
	}
	
	function selectElement(element) {
		var range = document.createRange();
		range.selectNodeContents(element);
		var selection = window.getSelection();
		selection.removeAllRanges();
		selection.addRange(range);
	}
	
	function addClass(element, className) {
		if(element.className.indexOf(className) === -1) {
			element.className += " " + className;
		}
	}

})(schrepfer.crypto);