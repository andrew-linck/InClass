// Create a function for each of your mathematical operations
const add = function(x, y) {
    return x + y;
}

const subtract = function(x, y) {
    return x - y;
}

const multiply = function(x, y) {
    return x * y;
}

const divide = function(x, y) {
    return x / y;
}

const remainder = function(x, y) {
    return x % y;
}

const exp = function(x, y) {
    return Math.pow(x, y)
}
// Using module.exports, export these functions as properties on an object
module.exports = {
    'add': add,
    'subtract': subtract,
    'multiply': multiply,
    'divide': divide,
    'remainder': remainder,
    'exp': exp
}