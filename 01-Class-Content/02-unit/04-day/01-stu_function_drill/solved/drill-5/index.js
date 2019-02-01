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
