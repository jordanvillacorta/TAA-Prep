function censor(str) {
	let censoredString = ''
	let splitWords = str.split(' ')
	for (let i = 0; i < splitWords.length; i++) {
		if (splitWords[i].length > 4) {
			let lettersFromSplitWord = splitWords[i].split('')
			for (let j = 0; j < lettersFromSplitWord.length; j++) {
				lettersFromSplitWord[j] = '*'
				splitWords[i] = lettersFromSplitWord.join('')
			}
		}
		censoredString += splitWords[i] + ' '
	}
	return censoredString.trim()
}