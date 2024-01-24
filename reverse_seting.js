// Loop
let data = "Usama";
let reverseString = "";
for (let i = data.length - 1; i >= 0; i--) {
	reverseString += data[i];
}

console.log(reverseString);

// One Liner
let myData = "Usama";

let reverse = myData.split("").reverse().join("");

console.log(reverse);
