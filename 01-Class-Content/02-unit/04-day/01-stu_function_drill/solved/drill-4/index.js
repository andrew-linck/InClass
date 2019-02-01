// Make a function that takes a string and console.logs true if the string has more than 5 characters or false if it doesn't.
const nameLength = function (name) {
    if (name.length > 5) {
        console.log( true );
    } else {
        console.log( false );
    }
}

nameLength('Daniel');
