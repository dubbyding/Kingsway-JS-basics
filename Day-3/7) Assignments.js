/**
 * 1. Write a program where you assign any text to a variable and the output should be text with alternate capital letter. For example:- a = 'test' output:- TeSt
 * 
 * 2. Write a program what reverses the text. For example:- a = 'test' output:- tset
 * 
 * 3. Write a program that finds the palindrome ie. same from front as well as from the back for example 'madam' doesn't change when is reversed.
 * 
 * 4. Write a program that makes every first letter of a word in a sentense capital. for example:- "a quick brown fox jumps over a lazy dog" => "A Quick Brown Fox Jumps Over A Lazy Dog"
 * 
 * 5. Write a program that generates a fizzbuzz program from 1 - 100 number and store them in an array
 * 
 * 6. Write a program that generates a object which has the first letter of a word as a key and array of string starting with that letter as a value.
 * for example:-
 Output:-
{
	'a': ['apple','airplane'],
	'b': ['bear','banana']
}
 */

const s = 'a quick brown fox jumps over a lazy dog';

let finalString = '';
let prevValue = ' ';

for (let i in s) {
	if (prevValue === ' ') {
		finalString += s[i].toUpperCase();
	} else {
		finalString += s[i].toLowerCase();
	}
	//

	prevValue = s[i];
}

console.log(finalString);
