var apple = function(number) {
	number *= 22
	return number;
};

var coffee = function(number) {
	number += 929292929292
	return number;

};

var argentina = function(number) {
	number *= number
	return number;

};

console.log(apple(coffee(argentina(999))));