function reverse(str) {
	let newString = ''
	for (let i = str.length -1; i > -1; i--) {
		let currentLetter = str[i]
		if (currentLetter === currentLetter.toLowerCase()) {
			newString += currentLetter.toUpperCase()
		}
		else if (currentLetter === currentLetter.toUpperCase()) {
			newString += currentLetter.toLowerCase()
		}
	}
	return newString
}