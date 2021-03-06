// Return the Sum of Two Numbers
// Create a function that takes two numbers as arguments and return their sum.

function addition(a, b) {
	return a + b;
}

// ----------
// Convert Minutes into Seconds
//Write a function that takes an integer minutes and converts it to seconds.

function convert(minutes) {
	return minutes * 60;
}

// ----------
// Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
	return num + 1;
}

// ----------
// Area of a Triangle
// Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
	return (base * height) / 2;
}

// ----------
// Return Something to Me!
// Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMeSomething(a) {
	return "something" + " " + a;
}

// ----------
// Convert Hours into Seconds
// Write a function that converts hours into seconds.

function howManySeconds(hours) {
	return hours * 3600;
}

// ----------
// Return the First Element in an Array
// Create a function that takes an array and returns the first element.

function getFirstValue(arr) {
	return arr[0];
}

// Using the .shift() prototype works as well.

function getFirstValue(arr) {
	return arr.shift(0);
}

// ----------
// Maximum Edge of a Triangle
// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

function nextEdge(side1, side2) {
	return side1 + side2 - 1;
}

// ----------
// Find the Perimeter of a Rectangle
// Create a function that takes length and width and finds the perimeter of a rectangle.

function findPerimeter(length, width) {
	return length * 2 + width * 2;
	// alternatively
	// return (length + width) * 2
}

// ----------
// Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainder(x, y) {
	return x % y;
}

// ---------
// Correct the Mistakes
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// BEFORE
// function squaed(b) {
// 	return a * a;
// }

// AFTER
function squared(a) {
	return a * a;
}

// ---------
// Using the "&&" Operator
// Make a function using the && operator.

function and(a, b) {
	if (a && b == true) {
		return true;
	} else {
		return false;
	}
}

// Alternatively:
function and(a, b) {
	return a && b;
}

// ---------
// Is the Number Less than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero(num) {
	if (num <= 0) {
		return true;
	} else {
		return false;
	}
}

// Alternatively:
function lessThanOrEqualToZero(num) {
	return num <= 0;
}

// ---------
// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(a, b) {
	return a + b < 100;
}

// ---------
// Football Points
// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
/* wins get 3 points
-- draws get 1 point
-- losses get 0 points */

function footballPoints(wins, draws, losses) {
	return wins * 3 + draws * 1 + losses * 0;
}

// ---------
// Are the Numbers Equal?
// Create a function that returns true when num1 is equal to num2; otherwise return false.

function isSameNum(num1, num2) {
	return num1 === num2;
}

// ---------
// The Farm Problem
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species. You have to implement a function that returns the total number of legs of all the animals.
/* chickens = 2 legs
-- cows = 4 legs
-- pigs = 4 legs */

function animals(chickens, cows, pigs) {
	return chickens * 2 + cows * 4 + pigs * 4;
}

// ---------
// Convert Hours and Minutes into Seconds
// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

function convert(hours, minutes) {
	return hours * 3600 + minutes * 60;
}

// ---------
// Equality Check
// In this challenge, you must verify the equality of two different given parameters: a and b. The possible types of the given parameters are Numbers, Strings, Booleans, and Special values: undefined, null and NaN. Implement a function that returns true if the parameters are equal, and false if they are different.

function checkEquality(a, b) {
	return a === b;
}

// ---------
// Profitable Gamble
// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

function profitableGamble(prob, prize, pay) {
	return prob * prize > pay;
}

// ---------
// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function frames(minutes, fps) {
	return minutes * 60 * fps;
}

// ---------
// Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function comp(str1, str2) {
	return str1.length === str2.length;
}

// ---------
// Is the String Empty?
// Create a function that returns true if a string is empty and false otherwise.

function isEmpty(s) {
	return s === "";
}

// ---------
// Multiple of 100
// Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.

function divisible(num) {
	if (num % 100 === 0) {
		return true;
	} else {
		return false;
	}
}

// ---------
// Drinks Allowed?
// A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break. Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.

function shouldServeDrinks(age, onBreak) {
	if (age >= 18 && onBreak == false) {
		return true;
	} else {
		return false;
	}
}

// ---------
// Buggy Code
// The challenge is to try and fix this buggy code, given the inputs true and false.

// BEFORE
// function has_bugs(buggy_code) {
// 	if (buggyCode) {
// 		return 'sad days'
// 	} else if {
// 		return 'it's a good day'
// 	}
// }

// AFTER
function has_bugs(buggy_code) {
	if (buggy_code) {
		return "sad days";
	} else {
		return "it's a good day";
	}
}

// ---------
// Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

function getVoteCount(votes) {
	return votes.upvotes - votes.downvotes;
}

// ---------
// Recursion: Length of a String
// Write a function that returns the length of a string. Make your function recursive.

function length(str) {
	if (str === "") {
		return 0;
	} else {
		return 1 + length(str.substring(1));
	}
}

// ---------
// Concatenate First and Last Name into One String
// Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(firstName, lastName) {
	return lastName.concat(", ", firstName);
}

// ---------
// Burglary Series (01): Calculate Total Losses
// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

function calculateLosses(obj) {
	if (Object.values(obj).reduce((a, b) => a + b, 0) === 0) {
		return "Lucky you!";
	} else {
		return Object.values(obj).reduce((a, b) => a + b, 0);
	}
}

// ---------
// Format I: Template String
// https://edabit.com/challenge/DCmM4Eo6GQfrJoKXc
function format(a, b, c) {
	const template = `Their names were: ${a}, ${b} and ${c}.`;
	return template;
}

// ---------
