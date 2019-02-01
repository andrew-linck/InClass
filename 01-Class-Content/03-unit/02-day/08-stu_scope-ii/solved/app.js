console.log('top j', j); // undefined
// console.log('top i', i); // ReferenceError: i is not defined

for(let i = 0; i < 4; i++){
  console.log('inside i', i); // 0, 1, 2, 3
}

// console.log('outside i', i); // ReferenceError: i is not defined

for(var j = 0; j < 4; j++){
  console.log('inside j', j); // 0, 1, 2, 3
}

console.log('outside j', j); // 4