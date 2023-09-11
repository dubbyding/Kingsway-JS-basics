const newObj = {
	firstName: 'Raj',
	lastName: 'Maharjan',
	fullNameShow: function () {
		console.log(this.firstName + ' ' + this.lastName);
	},
};

console.log(newObj.fullNameShow());
