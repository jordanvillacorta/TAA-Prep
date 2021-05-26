function replaceVowel(word) {
	let vowelNumbers = {
	a: 1,
	e: 2,
	i: 3,
	o: 4,
	u: 5
	}
	
	let resultString = ''
	for (let i = 0; i < newWord.length; i++) {
		if (vowelNumbers[newWord[i]] === undefined) {
			vowelNumbers[newWord[i]] = newWord[i]
			resultString += vowelNumbers[newWord[i]]
		} else {
			resultString += vowelNumbers[newWord[i]]
		}
	}
	return resultString
}