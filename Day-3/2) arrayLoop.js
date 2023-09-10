/**
 * Loop though array
 * foreach, for loop
 */
const fruits = ['apple', 'banana', 'orange', 'grape'];

const maxLoop = fruits.length;

for (let i = 0; i < maxLoop; i++) {
	if (i % 2 !== 0) {
		const temp = fruits[i].toUpperCase();

		fruits[i] = temp;
	}
}

console.log(fruits);

for (let i in fruits) {
	console.log(fruits[i]);
}
