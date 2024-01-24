// Check if palidrome

// Using for loop
let data = "ABCBA";
let reversed = "";
for (let i = data.length - 1; i >= 0; i--) {
	reversed += data[i];
}

if (reversed === data) {
	console.log("Is Palindrome");
} else {
	console.log("Is not Palindrome");
}

// Using one line

let myData = "ABCBA";

myData.split("").reverse().join("") === myData ? console.log("Is Palindrome") : console.log("Is not Palindrome");
