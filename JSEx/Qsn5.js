const prompt = require('prompt-sync')();

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
let arr3 = []
function buildNewArr(arr1, arr2) {
    let found = false;
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                found = true;
                break;
            }
        }
        if (found == false) {
            arr3.push(arr1[i]);
        }
        found = false;
    }
}

buildNewArr(arr1, arr2);
buildNewArr(arr2, arr1);
console.log(arr3);

function qsn7() {
    let sentence = prompt("Enter a sentence : ");
    console.log("You entered : \n " + sentence);
    let words = []
    words = sentence.split(' ');
    console.log(words);
    console.log(' No of words are : ' + words.length);
}

//qsn7();
function qsn8(arr, n)
{
    let retArr = [];
    for(i=0; i < arr.length; i++)
    {
        retArr.push(arr[i][n]);
    }
    return retArr;
}

const studArr = [
    ['23MX301', 90], ['23MX302', 98], ['23MX303', 99]
]
let arr = qsn8(studArr, 1);
console.log(arr);

function retSum(arr)
{
    let sum = arr.reduce( (acc, val) => acc+=val, 0)
    return sum;
}

function qsn9()
{
    let arr = [1,2,3];
    arr.forEach(element => {
    } );  
}

isOdd(5)

is 


console.log(retSum(arr5));

exclaim() = (str) => {str + '!'};
console.log(exclaim(exclaim('Adrian')));

