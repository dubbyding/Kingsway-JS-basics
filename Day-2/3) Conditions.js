/**
 * If statement, swtich case statement
 */

const fruit = 'apple';

if (fruit === 'apple' || fruit === 'grape') {
	console.log('Its tasty');
} else if (fruit === 'orange') {
	console.log('Its okay');
} else {
	console.log('Its not tasty');
}

switch (fruit) {
	case 'orange':
		console.log('Hello');

		break;
	case 'apple':
		console.log('hi');

		break;

	case 'banana':
	case 'grape':
		console.log('Fun');

		break;
	default:
		console.log('Sakyo');
}
