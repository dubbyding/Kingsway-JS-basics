function sum(arr) {
	let sum = 0;

	for (let i in arr) {
		sum += arr[i];
	}
	arr[0] = 9;

	return sum;
}

const arrNum = [1, 2, 3, 4, 5];

const sumNumber = sum(arrNum);

console.log(arrNum);

function numberSum(a, b) {
	a = 2;
	console.log(a);
}

const firstNumber = 1;

numberSum(firstNumber, 2);
console.log(firstNumber);
