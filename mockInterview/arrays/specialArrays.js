function isSpecialArray(arr) {
	let evenArray = []
	let oddArray = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0 && i % 2 === 0) {
			evenArray.push(arr[i])
		} 
		if (arr[i] % 2 === 1 && i % 2 === 1) {
			oddArray.push(arr[i])
		}
	}
	if (evenArray.length + oddArray.length !== arr.length) {
		return false
	}
	return true
}