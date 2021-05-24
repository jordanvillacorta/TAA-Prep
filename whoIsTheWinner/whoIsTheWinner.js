function determineWinnerOfFight(obj) {
	let meCounter = 0;
	let spouseCounter = 0;
	for (let key in obj) {
		let round = obj[key]
		if (obj[key].me > obj[key].spouse) {
			meCounter++
		} else if (obj[key].spouse > obj[key].me) {
			spouseCounter++
		}
	}
	if (meCounter > spouseCounter) {
		return 'ME!'
	} else if (spouseCounter > meCounter) {
		return 'SPOUSE!'
	}
	return 'NOBODY!'
}