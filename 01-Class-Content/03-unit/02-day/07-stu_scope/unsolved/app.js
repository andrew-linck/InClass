let a = 1;
let b = 2;
let c = 3;

const outerFunction = function(){
  let a = 4;
  b = 5;
  let d = 6;
  const innerFunction = function(){
    console.log('inner a is', a);
    console.log('inner b is', b);
    console.log('inner c is', c);
    console.log('inner d is', d);
  }

  innerFunction();
  
  console.log('outer a is', a);
  console.log('outer b is', b);
  console.log('outer c is', c);
  console.log('outer d is', d);
}

outerFunction();

console.log('global a is', a);
console.log('global b is', b);
console.log('global c is', c);
console.log('global d is', d);

innerFunction();