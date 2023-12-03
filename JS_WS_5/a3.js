const prompt = require('prompt-sync')();

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
    const userInput = prompt("Enter a integer numbers separated by commas :");

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
ln(3);
//qsn3();
ln();
ln(4);
//qsn4();
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

