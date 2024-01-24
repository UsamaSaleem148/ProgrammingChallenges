// Check how many constants and vowels does a string have

const checkNumberofVandC = (word) => {
	let vowels = ['a', 'e', 'i', 'o', 'u'];
	let numberOfVowels = 0;
	let numberOfConstants = 0;
	for (let i = 0; i < word.length; i++) {
		if (vowels.includes(word[i].toLowerCase())) {
			numberOfVowels++;
		} else {
			numberOfConstants++;
		}
	}

	return "There are " + numberOfVowels + " vowels and " + numberOfConstants + " constants in the given word";
}

console.log(checkNumberofVandC("ABCIO"));
