let arr = [];
for (var i = 0; i < 100; i++) {
	arr[i] = Math.floor(Math.random() * 100);
}

const quick_sort = (myArr, lowIndex, highIndex) => {
	if (lowIndex >= highIndex) {
		return
	}

	let pivotPoint = myArr[highIndex];
	let leftPointer = lowIndex;
	let rightPointer = highIndex;

	while (leftPointer < rightPointer) {
		while (arr[leftPointer] <= pivotPoint && leftPointer < rightPointer) {
			leftPointer++;
		}

		while (arr[rightPointer] >= pivotPoint && leftPointer < rightPointer) {
			rightPointer--;
		}

		swap(myArr, leftPointer, rightPointer);
	}
	swap(myArr, leftPointer, highIndex);

	quick_sort(myArr, lowIndex, leftPointer - 1);
	quick_sort(myArr, leftPointer + 1, highIndex);
}

function swap(myArray, index1, index2) {
	let temp = myArray[index1];
	myArray[index1] = myArray[index2];
	myArray[index2] = temp;
}
console.time('quick_sort')
quick_sort(arr, 0, arr.length - 1);
console.timeEnd('quick_sort')
