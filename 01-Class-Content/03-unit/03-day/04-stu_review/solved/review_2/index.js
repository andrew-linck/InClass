// ----------------Question 1---------------
const scopeVar = 'abc';

function q1() {
  console.log(scopeVar);
}

q1(); // What will this print? Answer: abc

// ----------------Question 2---------------
function q2() {
  const scopeVar = 'xyz';
  console.log(scopeVar);
}

q2(); // What will this print? Answer: xyz

// ----------------Question 3---------------
let newVar = 'abc';

function q3() {
  newVar = '123';
  if (true) {
    console.log(`${newVar}xyz`);
  }
};

q3(); // What will this print? Answer: 123xyz

// ----------------Question 4---------------
function q4(letters) {
  console.log(window.scopeVar = scopeVar + letters);
}

q4('def'); // What will this print? Answer: abcdef

// ----------------Question 5---------------
const arr = [10, 12, 15, 21];

function q5 () {
  for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
      console.log(`Index: ${i}, element: ${arr[i]}`);
    }, 3000);
  }
}

q5(); // What will this print? Answer: "Index: 4, element: undefined" printed four times.
