// zadanie 1
const arr = ['Jeden', 'Dwa', 'Trzy'];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// zadanie 2
const arr = ['Tom', 14, null, -7, undefined, 'Szesc', 'Mim', 2, 1];
console.log(arr[0], arr[1]);
console.log(arr[arr.length - 1]);
arr.forEach((v) => {
    console.log(v);
});

arr.filter((v, i) => i % 2 === 0).forEach((v) => {
    console.log(v);
});

arr.filter((v) => typeof (v) === 'string').forEach((v) => {
    console.log(v);
});

arr.filter((v, i) => typeof (v) === 'number').forEach((v) => {
    console.log(v);
});

// zadanie 3
const arr = [11, 41, 23, -14, 12, 19, 54, 1];
console.log(arr.reduce((a, b) => a + b));
console.log(arr.reduce((a, b) => a - b));
console.log(arr.reduce((a, b) => a + b) / arr.length);
arr.filter((v, i) => v % 2 === 0).forEach((v) => {
    console.log(v);
});
arr.filter((v, i) => v % 2 !== 0).forEach((v) => {
    console.log(v);
});
let biggest = 0;
arr.forEach(v => {
    if (v > biggest) {
        biggest = v;
    }
});
console.log(biggest);
let smallest = 0;
arr.forEach(v => {
    if (v < smallest) {
        smallest = v;
    }
});
console.log(smallest);
const arrLength = arr.length - 1;
arr.forEach((v, i) => {
  console.log(arr[arrLength - i]);
});

// zadanie 4
arr.filter((v, i) => v % 2 === 0).forEach(v => {
    console.log(v);
});

// zadanie 5
arr.filter((v, i) => v % 2 === 0).forEach(v => {
    console.log(v);
});

// zadanie 6
function evenAvg(arr) {
    const evenNums = arr.filter((v, i) => v % 2 === 0);
    return evenNums.reduce((a, b) => a + b) / evenNums.length;
}

console.log(evenAvg([1, 2, 3, 4]));

// zadanie 7
let arr = [14, 7, 13, -2, -5, 33];
function sort(array) {
    return array.sort((a, b) => a - b);
}

console.log(sort(arr));

// zadanie 8
function sumIndexesOfTwoArrays(arr1, arr2) {
    let arrSum = 0;
    arr1.forEach((v, i) => arrSum += i);
    arr2.forEach((v, i) => arrSum += i);
    return arrSum;
}
// 0 + 0 + 1 + 2
console.log(sumIndexesOfTwoArrays(['el'], ['el', 'el', 'el']));

// zadanie 9
let arr = [10, 1, 32, -2, -15, 22];
function dropFromArray(array, el) {
    return array.filter((item) => item != el);
}

console.log(dropFromArray(arr, 17));

// zadanie 10
let arr = [10, 1, 32, -2, -15, 22];

function makeElsOpposite(array) {
    return array.map((v) => v * -1);
}

console.log(makeElsOpposite(arr));
