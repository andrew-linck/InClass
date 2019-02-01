// Make a function that multiplies 2 numbers.
const multiply = function (num1, num2) {
    console.log( num1 * num2 );
}

multiply(2, 4);

// Make a function the adds two numbers and subtracts the result by 24.
const math = function (num1, num2) {
    console.log( (num1 + num2) - 4 );
}

math(23, 10);

// Make a function that concatenates 2 strings
const concat = function (string1, string2) {
    console.log( `${string1} ${string2}` );
}

concat('George', 'Yoo');

// Make a function that takes a string and console.log(s true if the string has more than 5 characters or false if it doesn't.
const nameLength = function (name) {
    if (name.length > 5) {
        console.log( true );
    } else {
        console.log( false );
    }
}

nameLength('Daniel');

// Make a function that sums the elements in an array
const arraySum = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    console.log( sum );
}

const testList = [24, 56, 99, 1, 34, 12];
arraySum(testList);

// Make a function that takes in 2 numbers and outputs the larger of the two
const largerNum = function (num1, num2) {
    if (num1 > num2) {
        console.log( num1 );
    } else {
        console.log( num2 );
    }
}

largerNum(99, 100);

// Make a function that console.logs the first letter of a string
const firstLetter = function (text) {
    const letter = text[0]
    console.log( letter );
}

firstLetter('Test');

// Make a function that converts Fahrenheit to Celsius. **HINT:** The equation for converting Fahrenheit to Celsius is `(F - 32)/1.8`
const toCelsius = function (temp) {
    const newTemp = (temp - 32)/1.8 ;
    console.log( newTemp );
}

toCelsius(65);
