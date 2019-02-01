const numList1 = [1, 4, 5, 6, 2, 3, 1, 7, 6, 8];
const numList2 = [10, 9, 77, 9, 2, 1, 0, 82, 2];
const numList3 = [1, 14, 66, 543, 2, 1, 5, 674];
const numList4 = [9, 6, 3, 2, 1, 6, 7, 8, 8, 7];
const numList5 = [4.2, 5.1, 3, 0, 0, 453, 2.43];

const sumFunc = function (arr) {

  let sum = 0

  for ( let i = 0; i < arr.length; i++ ) {
    sum = sum + arr[i];
  }
  console.log(sum);
}

sumFunc(numList1);
sumFunc(numList2);
sumFunc(numList3);
sumFunc(numList4);
sumFunc(numList5);
