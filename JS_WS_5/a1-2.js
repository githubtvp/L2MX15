const prompt = require("prompt-sync")();

const arr = [0, 1, 2, 3, 4, 5, 6];
function getArrEl() {
  var numbersArray = [];

  // Use a while loop to repeatedly prompt the user for numbers
  while (true) {
    // Prompt the user to enter a number
    var userInput = prompt("Enter a number or type 's' to finish):");

    // Check if the user wants to stop
    if (userInput.toLowerCase() === "s") {
      break; // Exit the loop if the user types 'stop'
    }

    // Convert the user input to a number and add it to the array
    var number = parseFloat(userInput);

    // Check if the conversion was successful
    if (!isNaN(number)) {
      if (number > 0) numbersArray.push(number);
    } else {
      alert("Invalid input. Please enter a valid number.");
    }
  }
  return numbersArray;
}

const posArr = arr.filter((num) => {
  return num > 0;
});
prArr(posArr);
//const numArr;
let numArr = [];
function qsn1() {
  numArr = getArrEl();
  prArr(numArr);
}
// const posArr = [];
// numArr.forEach( (element) => {
//     if(element > 0)
//     {
//         posArr.push(element);
//     }
// });
function qsn2() {
  maxNo = (arr) => {
    let maxNo = arr[0];
    arr.forEach((element) => {
      if (element > maxNo) maxNo = element;
    });
    return maxNo;
  };

  pr("Max no : " + maxNo(numArr));
}

function sumOfDigits(number, splitCh) {
  // Convert the number to a string to iterate over its digits
  const digits = number.toString().split(splitCh).map(Number);

  // Use the reduce method to sum up the digits
  const digitSum = digits.reduce((acc, digit) => acc + digit, 0);
  //pr(digitSum);
  return digitSum;
}

// Read a number from the user
function qsn3() {
  const userInput = prompt("Enter a integer value :");

  // Convert the user input to a number
  const userNumber = parseInt(userInput);

  // Check if the conversion was successful
  if (!isNaN(userNumber)) {
    // Call the function to get the sum of digits
    const result = sumOfDigits(userNumber, "");

    // console.log(`Sum of digits of ${userNumber}:`, result);
    pr(`Sum of digits of ${userNumber} : ${result} `);
  } else {
    alert("Invalid input. Please enter a valid number.");
  }
}

function qsn4() {
  let str = prompt("Enter a string : ");
  pr("You entered : \n" + str);
  let arrStr = [];
  //arrStr = str.split(/\s+/);
  //arrStr = arrStr.reverse();
  str = str.trim();
  // Iterate over the string from the end to the beginning
  for (let i = str.length - 1; i >= 0; i--) {
    arrStr.push(str[i]);
  }
  prArr(arrStr);
  while (arrStr.length > 0) process.stdout.write(arrStr.pop());
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
let arr3 = [];
function buildNewArr(arr1, arr2) {
  arr1.forEach((element) => {
    if (!arr2.includes(element)) arr3.push(element);
  });
}

function qsn5() {
  buildNewArr(arr1, arr2);
  buildNewArr(arr2, arr1);
  console.log(arr3);
}

// Read a number from the user
function qsn6() {
  const userInput = prompt("Enter integer numbers separated by commas :");

  // Convert the number to a string to iterate over its digits
  let digits = [];
  digits = userInput
    .toString()
    .split(",")
    .map((numStr) => parseInt(numStr.trim()));

  // Use the reduce method to sum up the digits
  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  //pr(digitSum);

  // console.log(`Sum of digits of ${userNumber}:`, result);
  pr(`Sum of digits of ${userInput} : ${sum} `);
}

function qsn7() {
  let sentence = prompt("Enter a sentence : ");
  console.log("You entered : \n " + sentence);
  let words = [];
  words = sentence.split(" ");
  console.log(words);
  console.log(" No of words are : " + words.length);
}

function studArrProcessed(arr, n) {
  let retArr = [];
  for (i = 0; i < arr.length; i++) {
    retArr.push(arr[i][n]);
  }
  return retArr;
}
const studArr = [
  ["23MX301", 90],
  ["23MX302", 98],
  ["23MX303", 99],
];

function qsn8() {
  let arr = studArrProcessed(studArr, 1);
  console.log(arr);
}

function retSum(arr) {
  let sum = 0;
  if (arr.length > 1) {
    sum = arr.reduce((acc, val) => {
      return (acc += val);
    }, 0);
  } else {
    sum += arr;
  }
  //console.log("\nSum : " + sum);
  return sum;
}

function qsn9() {
  let sum = 0;
  let arr = [1, [2, 3], 4, [5, 6], [7, 8, 9]];
  arr.forEach((element) => {
    sum += retSum(element);
  });
  console.log("Sum of jagged array  : " + sum);
}

// function qsn10(maxNo) {
//   let arr = [];
//   let n = Math.round(maxNo);
//   while (arr.length < n) {
//     let x = Math.random() * n + 1;
//     x = Math.round(x);
//     while (arr.includes(x) || x < 1 || x > n) {
//       x = Math.random() * n + 1;
//       x = Math.round(x);
//     }
//     arr.push(x);
//   }
//   console.log(arr);
//   return arr;
// }

function qsn10(maxNo) {
  const theSet = new Set();
  let n = Math.round(maxNo);
  while (theSet.size < n) {
    let x = Math.random() * n + 1;
    x = Math.round(x);
    theSet.add(x);
  }
  console.log(theSet);
}


// const promise = new Promise(function (resolve, reject) {
//   resolve("Promise has been resolved!");
// });
// promise.then((value) => console.log(value));
// console.log("I am not the promise");

// const delay = () => {
//   return new Promise((resolve, reject) => {
//     return setTimeout(() => {
//       resolve("Hello1");
//     }, 1000);
//   });
// };
// const sayHello = (value) => {
//   console.log("Hello2");
// };
// delay().then(sayHello);
ln();
ln(1);
qsn1();
ln(2);
qsn2();
ln();
ln(3);
qsn3();
ln();
ln(4);
qsn4();
ln();
ln(5);
qsn5();
ln();
ln(6);
qsn6();
ln();
ln(7);
qsn7();
ln();
ln(8);
qsn8();
ln();
ln();
ln(9);
qsn9();
ln();
ln(10);
qsn10(10);
ln();
function ln(n) {
  for (i = 0; i < 25; i++) {
    process.stdout.write("-");
  }
  if (arguments.length === 1) {
    process.stdout.write("\nAns " + n + ".\n");
  }
}
function pr(msg) {
  process.stdout.write(msg + "\n");
}
function prArr(arr) {
  console.log(arr); //process.stdout.write(msg + '\n');
}
