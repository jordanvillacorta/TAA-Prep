function getFrequencies(arr) {
	let frequencyDistribution = {}
	for (let i = 0; i < arr.length; i++) {
		if (frequencyDistribution[arr[i]] === undefined) {
			frequencyDistribution[arr[i]] = 1
		} else {
			frequencyDistribution[arr[i]] += 1
		}
	}
	return frequencyDistribution
}