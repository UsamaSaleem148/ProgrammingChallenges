// Check if two strings are anagrams

// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once

const checkAnagram = (string1, string2) => {
	if (string1.length !== string2.length) {
		return false
	}

	let char1 = string1.split("").sort().join("")
	let char2 = string2.split("").sort().join("")
	return char1 === char2
}

console.log(checkAnagram("care", "race"))
