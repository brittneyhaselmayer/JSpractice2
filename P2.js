function maths(num) {
	if (!(num % 3 == 0 && num % 5 == 0) && (num % 3 == 0 || num % 5 == 0)) {
		console.log(true);
	} else {
		console.log(false);
	}
}

function largernum(num1, num2) {
	if (num1 > num2) {
		console.log(num1);
	} else {
		console.log(num2);
	}
}

function largerstring(string1, string2) {
	if (string1.length >= string2.length) {
		console.log(string1);
	} else {
		console.log(string2);
	}
}

function number_check(num) {
	if (num > 0) {
		console.log('positive');
	}
	if (num === 0) {
		console.log('zero');
	} else {
		console.log('negative');
	}
}

function word_check(word) {
	if (word.length > 6) {
		console.log('long');
	}
	if (word.length < 6) {
		console.log('short');
	}
	if (word.length == 6) {
		console.log('med');
	}
}

function word_e(word) {
	let num = 0;
	for (let i = 0; i < word.length; i++) {
		if (word[i] === 'e') {
			num += 1;
		}
	}
	console.log(num);
}

function count_a(word) {
	let num = 0;
	for (i = 0; i < word.length; i++) {
		if (word[i] == 'A' || word[i] == 'a') {
			num += 1;
		}
	}
	console.log(num);
}

function sum_nums(max) {
	let final = 0;
	for (i = 1; i <= max; i++) {
		final += i;
	}
	console.log(final);
}

function factorial(num) {
	let final = 1;
	for (i = 1; i <= num; i++) {
		final = final * i;
	}
	console.log(final);
}

function reverse(word) {
	let rev = '';
	for (i = 0; i < word.length; i++) {
		rev = word[i] + rev;
	}
	console.log(rev);
}

function is_palindrome(word) {
	let reverse = '';
	for (let i = 0; i < word.length; i++) {
		reverse = word[i] + reverse;
	}
	if (word === reverse) {
		console.log(true);
	} else {
		console.log(false);
	}
}

is_palindrome('daaaaaa');
