function multiplyNums(nums) {
	let listOfNums = nums.split(', ')
	let product = 1
	for (let i = 0; i < listOfNums.length; i++) {
		product *= parseInt(listOfNums[i])
	}
	return product
}