var schrepfer = schrepfer || {};

schrepfer.crypto = (function() {
	'use strict';
	
	var crypto = window.crypto || window.msCrypto;
	var Math = window.Math;
	var symbols = "";
	var separator = '-';
	
	function getRandomStringSeparatedAndRoundUp(length, segmentLength) {
		if(!length || length < 1 || !segmentLength || segmentLength < 1) {
			return;
		}
		
		if(length % segmentLength > 0) {
			length += ( segmentLength - (length % segmentLength) );
		}
		return getRandomStringSeparated(length, segmentLength);
	}
	
	function getRandomStringSeparated(length, segmentLength) {
		if(!length || length < 1 || !segmentLength || segmentLength < 1) {
			return;
		}
		
		var result = "";
		var randomString = getRandomString(length);
		for(var i = 0; i < length; i++) {
			if(i % segmentLength == 0) {
				var buffer = "";
				for(var j = 0; j < segmentLength; j++) {
					if(length > i + j) {
						buffer += randomString[i + j];
					}
					else {
						break;
					}
				}

				if(i != 0) {
					result += separator;
				}
				result += buffer;
			}
		}
		return result;
	}
	
	function getRandomString(length) {
		if(!length || length < 1) {
			return;
		}
		
		var result = "";
		for(var idx = 0; idx < length; idx++) {
			var randomIndex = Math.round(getSecureRandomNumberBetween(0, symbols.length - 1));
			result += symbols[randomIndex];
		}
		return result;
	}
	
	function getSecureRandomNumberBetween(min, max) {
		return min + (getSecureRandomNumber() * (max - min));
	}
	
	// from: http://stackoverflow.com/a/13694869/3233827
	function getSecureRandomNumber() {
		var arr = new Uint32Array(2);
		crypto.getRandomValues(arr);

		// keep all 32 bits of the the first, top 20 of the second for 52 random bits
		var mantissa = (arr[0] * Math.pow(2,20)) + (arr[1] >>> 12)

		// shift all 52 bits to the right of the decimal point
		var result = mantissa * Math.pow(2,-52);
		
		return result;
	}
	
	function getInterface(alphabetString, length, segmentLength) {
		var result = "";
		if(!alphabetString || !length || length < 1) {
			return result;
		}
		
		symbols = alphabetString;
		
		if(typeof segmentLength === "undefined" || segmentLength < 1) { 
			return getRandomString(length);
		}
		else {
			return getRandomStringSeparatedAndRoundUp(length, segmentLength);
		}
	}
	
	return {
		/*2 interfaces:
		 * - secure(alphabetString, length) returns a random string with characters from
		 *   alphabetString and with a length of length
		 * - secure(alphabetString, length, segmentLength) returns a random string with
		 *   characters from the alphabetString, with a length of length. The random string
		 *   is splitted into segments of segmentLength characters (if it does not fit, the
		 *   password gets longer). The length is the number of characters without separator.
		 */
		secure: getInterface
	};
})();
