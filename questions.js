var selectElementsStartingWithA = function(array) {
	var tab = [];
	for (var i = 0; i < array.length; i++){
		var key = array[i].charAt(0);
			if(key.match(/a/)){
				tab.push(array[i]);
			}

	}
	return tab;
}

var selectElementsStartingWithVowel = function(array) {
    var tab = [];
	for (var i = 0; i < array.length; i++){
		var key = array[i].charAt(0);
			if(key.match(/[aeiouy]/)){
				tab.push(array[i]);
			}

	}
	return tab;
}

var removeNullElements = function(array) {
    /*array.splice(2,2);
    return array.slice();*/

    for (var i = 0; i < array.length; i++)
 		if (array[i] == null)
 			array.splice(i,2)
 			i--;
 			return array;
}

var removeNullAndFalseElements = function(array) {
    /*array.splice(2,2);
    array.splice(2,1);
    return array.slice();*/

    for (var i = 0; i < array.length; i++)
 		if (array[i] == null)
 			array.splice(i,3)
 			array.slice();
 			return array;
}

var reverseWordsInArray = function(array) {
	var tab = [];
	for (var i = 0; i < array.length; i++)
		tab.push(array[i].split("").reverse().join(""));
		return tab;
}

var everyPossiblePair = function(array) {
    return 'Write your method here';
}

var allElementsExceptFirstThree = function(array) {
    array.splice(0,3);
    return array;
}

var addElementToBeginning = function(array, element) {
    var tab = array;
    tab.unshift(element);
    return tab;
}

var sortByLastLetter = function(array) {
    return 'Write your method here';
}

var getFirstHalf = function(string) {
    return 'Write your method here';
}

var makeNegative = function(number) {
    return 'Write your method here';
}

var numberOfPalindromes = function(array) {
    return 'Write your method here';
}

var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
