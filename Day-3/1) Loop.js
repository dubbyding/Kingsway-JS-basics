/**
 * For loop
 * While loop
 * do while loop
 */

// i++, i--
// i++ => i=i+1
//

for (i = 0; i <= 2; i++) {
	console.log(i);
}

let multiple = 1001;

let counter = 0;

while (multiple <= 1000) {
	// Statement
	multiple = 2 * multiple;
	counter++;
}

console.log(counter, multiple);

let j = 0;
do {
	console.log(j, 'print');
} while (j < 0);
