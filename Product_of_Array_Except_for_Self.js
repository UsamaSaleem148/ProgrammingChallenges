const arrayData = [1, -2, 0, 0]
const getProduct = (a) => {
	let result = new Array(a.length)
	for (let i = 0; i < a.length; i++) {
		let product = 1;
		for (var j = 0; j < a.length; j++) {
			if (j !== i) {
				product = product * a[j]
			}
		}
		result[i] = parseInt(product)
	}
	return result;
}

const res = getProduct(arrayData)
console.log(res)
