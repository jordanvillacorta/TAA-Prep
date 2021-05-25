function sameVowelGroup(wordList) {
	let sameVowelList = []
	let vowelsInFirstWord = vowelFinder(wordList[0])
	for (let i = 0; i < wordList.length; i++) {
		let vowelsInCurrentWord = vowelFinder(wordList[i])
		let vowelCount = 0
		for (let j = 0; j < vowelsInCurrentWord.length; j++) {
			if (vowelsInFirstWord.includes(vowelsInCurrentWord[j])) {
				vowelCount++
			}
			if (vowelCount === vowelsInCurrentWord.length) {
				sameVowelList.push(wordList[i])
			}
		}
	}
	return sameVowelList
}

function vowelFinder(word) {
	let vowels = ['a', 'e', 'i', 'o', 'u']
	let vowelContainer = []
	for (let v = 0; v < word.length; v++) {
		if (vowels.includes(word[v])) {
			vowelContainer.push(word[v])
		}
	}
	
	let uniqueVowels = []
	for (let x = 0; x < vowelContainer.length; x++) {
		if (!uniqueVowels.includes(vowelContainer[x])) {
			uniqueVowels.push(vowelContainer[x])
		}
	}
	return uniqueVowels
}