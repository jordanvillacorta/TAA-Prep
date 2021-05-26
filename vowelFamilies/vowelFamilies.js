function sameVowelGroup(wordList) {
	let vowelsInFirstWord = vowelFinder(wordList[0])
	let resultVowelList = []
	for (let i = 0; i < wordList.length; i++) {
		let vowelsInCurrentWord = vowelFinder(wordList[i])
		let vowelCounter = 0
		for (let j = 0; j < vowelsInCurrentWord.length; j++) {
			if (vowelsInFirstWord.includes(vowelsInCurrentWord[j])) {
				vowelCounter++
			}
			if (vowelCounter === vowelsInCurrentWord.length) {
				resultVowelList.push(wordList[i])
			}
		}
	}
	return resultVowelList
}

function vowelFinder(word) {
	let vowels = ['a', 'e', 'i', 'o', 'u']
	let foundVowels = []
	for (let v = 0; v < word.length; v++) {
		if (vowels.includes(word[v])) {
			foundVowels.push(word[v])
		}
	}
	
	let uniqueVowels = []
	for (let x = 0; x < foundVowels.length; x++) {
		if (!uniqueVowels.includes(foundVowels[x])) {
			uniqueVowels.push(foundVowels[x])
		}
	}
	return uniqueVowels
}