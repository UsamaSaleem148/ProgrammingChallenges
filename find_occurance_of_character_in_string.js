// Find the number of occurrences of a character in a String

let data = "assessors";

const finOccurance = (word) => {
	let found = 0;
	for (let i of data) {
		if (i === word) {
			found++
		}
	}
	return found;
}

console.log(finOccurance("s"));
