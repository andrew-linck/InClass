let a = 1;
let b = 2;
let c = 3;

const outerFunction = function(){
  let a = 4;
  b = 5;
  let d = 6;
  const innerFunction = function(){
    // console.log('inner a is', a); // 4
    // console.log('inner b is', b); // 5
    // console.log('inner c is', c); // 3
    // console.log('inner d is', d); // 6
  }

  // innerFunction();

  // console.log('outer a is', a); // 4
  // console.log('outer b is', b); // 5
  // console.log('outer c is', c); // 3
  // console.log('outer d is', d); // 6
}

// outerFunction();

// console.log('global a is', a); // 1
// console.log('global b is', b); // 5
// console.log('global c is', c); // 3
// console.log('global d is', d); // ReferenceError: d is not defined

// innerFunction(); //ReferenceError: innerFunction is not defined