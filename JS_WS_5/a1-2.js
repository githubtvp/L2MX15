
const prompt = require('prompt-sync')();

const arr = [0, 1, 2, 3, 4, 5, 6];
function getArrEl() {
  var numbersArray = [];

  // Use a while loop to repeatedly prompt the user for numbers
  while (true) {
    // Prompt the user to enter a number
    var userInput = prompt("Enter a number or type 's' to finish):");

    // Check if the user wants to stop
    if (userInput.toLowerCase() === 's') {
      break; // Exit the loop if the user types 'stop'
    }

    // Convert the user input to a number and add it to the array
    var number = parseFloat(userInput);

    // Check if the conversion was successful
    if (!isNaN(number)) {
      if (number > 0)
        numbersArray.push(number);
    } else {
      alert("Invalid input. Please enter a valid number.");
    }
  }
  return numbersArray;
}

const posArr = arr.filter((num)=>{ return num > 0});
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
    arr.forEach(element => {
      if (element > maxNo) maxNo = element;
    });
    return maxNo;
  }

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
      const result = sumOfDigits(userNumber, '');

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
  while (arrStr.length > 0)
      process.stdout.write(arrStr.pop());
}


// Read a number from the user
function qsn6() {
  const userInput = prompt("Enter integer numbers separated by commas :");

  // Convert the number to a string to iterate over its digits
  let digits = [];
  digits = userInput.toString().split(',').map(numStr => parseInt(numStr.trim()));

  // Use the reduce method to sum up the digits
  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  //pr(digitSum);

  // console.log(`Sum of digits of ${userNumber}:`, result);
  pr(`Sum of digits of ${userInput} : ${sum} `);

}

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
ln(6);
qsn6();








function ln(n) {
  for (i = 0; i < 25; i++) {
    process.stdout.write('-');
  }
  if (arguments.length === 1) {
    process.stdout.write('\nAns ' + n + '.\n');
  }
}
function pr(msg) {
  process.stdout.write(msg + '\n');
}
function prArr(arr) {
  console.log(arr); //process.stdout.write(msg + '\n');
}

