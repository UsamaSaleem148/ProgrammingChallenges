const fibonnaci = (n) => {
	let number = 0;
	let prevNum = 0;
	let prevPrevNum = 0;
	for (let i = 0; i < n; i ++) {
		if (i === 0 || i === 1) {
			number = i;
		} else {
			number = prevNum + prevPrevNum
		}

		prevPrevNum = prevNum
		prevNum = number
		
	console.log(number)
	}
}

fibonnaci(10)


// const fibonnaci = (n) => {
// 	if (n === 0 || n === 1) {
// 		return n
// 	}

// 	return fibonnaci(n-1) + fibonnaci(n-2)
// }

// for(let i = 0; i < 10; i++) {
// 	console.log(fibonnaci(i))
// }