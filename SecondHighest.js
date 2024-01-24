let arr = [1,2,10,11,10,15,16,80,79,87]
let high = 0
let small = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > high) {
        small = high
        high = arr[i]
    } else if (arr[i] > small) {
        small = arr[i]
    }
}

console.log(high)
console.log(small)