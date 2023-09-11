const sum = (a, b) => {
	const sum = a + b;
	return sum;
};

const finalSum = sum(1, 2);

console.log(finalSum);

// Anonomous function
() => {};

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((value, index) => {
	return value * value;
});

console.log(arr, newArr);

const consoleThis = (a) => {
	console.log(a);
};

const sumThisVar = (a, b, func) => {
	const sum = a + b;
	func(sum);
	return sum;
};

sumThisVar(1, 2, (sum) => console.log(sum + 1));
