const prompt = require('prompt-sync')();

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
let arr3 = []
function buildNewArr(arr1, arr2) {
    arr1.forEach(element => {
        if (!arr2.includes(element))
            arr3.push(element);
    });
}

function qsn5() {
    buildNewArr(arr1, arr2);
    buildNewArr(arr2, arr1);
    console.log(arr3);
}
//qsn5();
function qsn7() {
    let sentence = prompt("Enter a sentence : ");
    console.log("You entered : \n " + sentence);
    let words = []
    words = sentence.split(' ');
    console.log(words);
    console.log(' No of words are : ' + words.length);
}

//qsn7();
function qsn8(arr, n) {
    let retArr = [];
    for (i = 0; i < arr.length; i++) {
        retArr.push(arr[i][n]);
    }
    return retArr;
}

const studArr = [
    ['23MX301', 90], ['23MX302', 98], ['23MX303', 99]
]
let arr = qsn8(studArr, 1);
console.log(arr);

function retSum(arr) {
    let sum = 0;
    if (arr.length > 1) {
        sum = arr.reduce((acc, val) => { return (acc += val) }, 0);
    }
    else {
        sum += arr;
    }
    //console.log("\nSum : " + sum);
    return sum;
}

function qsn9() {
    let sum = 0;
    let arr = [1, [2, 3], 4, [5, 6], [7, 8, 9]]
    arr.forEach(element => {
        sum += retSum(element);
    });
    console.log("Sum of jagged array  : " + sum);
}

//qsn9();
function qsn10(maxNo) {
    let arr = [];
    let n = Math.round(maxNo);
    while (arr.length < n) {
        let x = Math.random() * n + 1;
        x = Math.round(x);
        while (arr.includes(x) || x < 1 || x > n) {
            x = Math.random() * n + 1;
            x = Math.round(x);
        }
        arr.push(x);
    }
    console.log(arr);
    return arr;
}
qsn10(10);


// const exclaim = (str) => {return (str + '!')};
// console.log(exclaim('Adrian'));
// console.log(exclaim(exclaim('Adrian')));

