function isIsogram(str) {
	let listOfLetters = str.toLowerCase().split('')
	let uniqueLetters = {}
	for (let i = 0; i < listOfLetters.length; i++) {
	  if (uniqueLetters[listOfLetters[i]] === undefined) {
			uniqueLetters[listOfLetters[i]] = 1
		} else {
			uniqueLetters[listOfLetters[i]] += 1
		}
		if (uniqueLetters[listOfLetters[i]] > 1) {
			return false
		}
	}
	return true
}