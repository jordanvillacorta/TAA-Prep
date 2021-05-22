function pizzaPoints(customers, minOrders, minPrice) {
	let freePizzaWinners = []
	for (let name in customers) {
		let qualifiedOrders = []
		for (let index = 0; index < customers[name].length; index++) {
		  if (customers[name][index] >= minPrice) {
				qualifiedOrders.push(customers[name][index])
			}
	  }
		if (qualifiedOrders.length >= minOrders) {
			freePizzaWinners.push(name)
		}
	}
	
	return freePizzaWinners.sort()
}