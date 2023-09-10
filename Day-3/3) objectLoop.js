/**
 * Loop through key value pair
 */
const details = {
	fullName: 'Raj Maharjan',
	job: 'Software Enginner',
	workExperience: 2,
};

const arrayObject = {
	0: 'orange',
	1: 'apple',
};

for (let i in details) {
	console.log(details[i]);
}
