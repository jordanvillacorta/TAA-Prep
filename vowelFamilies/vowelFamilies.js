function sameVowelGroup(wordList) {
	let resultVowelGroup = []
	let vowelsInTheFirstWord = vowelFinder(wordList[0])
	for (let i = 0; i < wordList.length; i++) {
		let currentWordVowels = vowelFinder(wordList[i])
		let count = 0
		for (let j = 0; j < currentWordVowels.length; j++) {
			if (vowelsInTheFirstWord.includes(currentWordVowels[j])) {
				count++
			}
			if (count === currentWordVowels.length) {
				resultVowelGroup.push(wordList[i])
			}
		}
	}
	return resultVowelGroup
}

function vowelFinder(word) {
	let vowels = ['a', 'e', 'i', 'o', 'u']
	let foundVowels = []
	for (let l = 0; l < word.length; l++) {
		if (vowels.includes(word[l])) {
			foundVowels.push(word[l])
		}
	}
	
	let uniqueVowels = []
	for (let v = 0; v < foundVowels.length; v++) {
		if (!uniqueVowels.includes(foundVowels[v])) {
			uniqueVowels.push(foundVowels[v])
		}
	}
	return uniqueVowels
}