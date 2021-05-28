function mapLetters(word) {
	let listOfLetters = {}
	for (let i = 0; i < word.length; i++) {
		if (listOfLetters[word[i]] === undefined) {
			listOfLetters[word[i]] = [i]
			console.log(listOfLetters[word[i]])
		} else {
			listOfLetters[word[i]].push(i)
		}
	}
	return listOfLetters
}