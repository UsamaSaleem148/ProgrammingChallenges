// Check if number is prime

const checkIfPrime = (n) => {
	if (n === 0 || n === 1) {
		return false
	}

	if (n === 2) {
		return true
	}

	for (var i = 2; i <= n/2; i++) {
		if (n%i === 0) {
			return false
		}
	}

	return true
}

console.log(checkIfPrime(5))
console.log(checkIfPrime(4))
console.log(checkIfPrime(11))
