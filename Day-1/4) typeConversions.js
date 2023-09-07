/**
 * 98000000000 -> +977-9800000000
 *
 * 9800000000 -> '9800000000' -> '+977-' + '9800000000'
 *
 * '12345' -> 12345 -> 12345 + 6 -> 12351
 */

const a = 1;

const numberToString = a.toString();

console.log(a + 1, numberToString + 1);

const b = '3.14';

const stringToNumber = parseFloat(b);

console.log(stringToNumber);

const c = 1 / 3;

console.log(c.toFixed(3));

console.log('1' + 1);

console.log('1' * 2);

const stringValue = 'This is test';
const secondStringValue = '1234This is mic 1234';

console.log(parseInt(stringValue));
console.log(parseInt(secondStringValue));
