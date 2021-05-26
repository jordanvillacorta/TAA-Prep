function replaceVowel(word) {
	let vowelNumbers = {
	a: 1,
	e: 2,
	i: 3,
	o: 4,
	u: 5
	}
	
	let resultString = ''
	for (let i = 0; i < word.length; i++) {
		if (vowelNumbers[word[i]] === undefined) {
			vowelNumbers[word[i]] = word[i]
			resultString += vowelNumbers[word[i]]
		} else {
			resultString += vowelNumbers[word[i]]
		}
	}
	return resultString
}