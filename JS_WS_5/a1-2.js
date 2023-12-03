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
ln();
ln(1);
qsn1();
ln(2);
qsn2();
ln();
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

