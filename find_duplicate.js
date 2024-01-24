const arr = [1, 2, 3, 3]
const arr2 = [1, 2, 3, 3]

for (let i = 0; i < arr.length; i++) {
	let index = Math.abs(arr[i]) - 1;
	if (arr[index] < 0) {
		console.log("Duplicate " + Math.abs(arr[index]))
		break
	}

	arr[index] = -arr[index]
}

for (let j = 0; j < arr2.length; j++) {
	for (let k = j + 1; k < arr2.length; k++) {
		if (arr2[j] === arr2[k]) {
			console.log("Found " + arr2[j])
			break
		}
	}
}
