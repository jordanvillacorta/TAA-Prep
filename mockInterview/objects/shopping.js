const tax = .06

function checkout(cart) {
	let total = 0
	let checkoutTotal = 0
	for (let i = 0; i < cart.length; i++) {
		total += (cart[i].prc * cart[i].qty)
		if (cart[i].taxable === true) {
			total += (cart[i].prc * cart[i].qty) * tax
		}
	}
	return total
}