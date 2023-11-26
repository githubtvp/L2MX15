const prompt = require('prompt-sync')();

var myStack = [1, 2, 3.2, 4, 5, 5.011, 6.7564, 8, 9.4520];


while (true) {
    displayMenu();
    let choice = prompt("\nEnter your choice: ");

    switch (choice) {
        case "a":
            demoPush();
            choice = 'q';
            break;
        case "b":
            demoPop();
            choice = 'q';
            break;
        case "c":
            findEl();
            choice = 'q';
            break;
        case "d":
            moOfElsInStack();
            choice = 'q';
            break;
        case "e":
            demoCountIntegersFloats();
            choice = 'q';
            break;
        case "f":
            demoFixDecimalPlaces();
            choice = 'q';
            break;
        case "g":
            demoReduce();
            choice = 'q';
            break;        
        case "q":
            console.log("Exiting program.");
            break;
        default:
            demoReduce();
            choice = 'q';
            break;
    }
    if (choice === 'q') {
        break;
    }
}

function displayMenu() {
    console.log("a. Enter 'a' - Push elements to stack");
    console.log("b. Enter 'b' - Pop elements out of stack");
    console.log("c. Enter 'c' - Find presence of an element and its index");
    console.log("d. Enter 'd' - Print number of elements in the stack");
    console.log("e. Enter 'e' - Count the total integers and total float inside the stack");
    console.log("f. Enter 'f' - Fix number of decimal place for floating point numbers ");
    console.log("g. Enter 'g' - Reduce the array values to a sum");
    console.log("q. Enter 'q' to exit program");
}

function isValidNo(input) {
    let isValid = true;
    if (Number.isInteger(input) || ((!isNaN(input) && !Number.isInteger(input)))) {
        return isValid;
    }
    else {
        isValid = false;
    }
    return isValid;
}

function prArr(arr) {
    console.log("\nElements are : \n");
    /*for (let i = 0; i < arr.length; i++) {
        process.stdout.write(arr[i] + " ");
    }*/   
    console.log(arr);
}

function demoPush() {
    let el = prompt("Enter a integer or float number to push into stack : ");
    if (isValidNo(el)) {
        myStack.push(el);
    }
    prArr(myStack);
}
function demoPop() {
    let val = 0;
    if (!(myStack.length === 0)) {
        val = myStack.pop();
    }
    console.log("\nElement popped out : " + val);
    prArr(myStack);
}

function findEl() {
    let anEl = prompt("Enter a integer or float number to find in array : ");
    anEl = parseFloat(anEl);
    foundEl = myStack.find((el) => parseFloat(el) === anEl);
    if (foundEl === anEl) {
        foundEl = myStack.indexOf(anEl);
        console.log(`\nThe value '${anEl}' exists in the array at Index : . '${foundEl}'`);
    }
    else {
        console.log("Not found : ");
    }
}

function moOfElsInStack() {
    console.log("\nNo of elements in myStack  : ", myStack.length);
}

function demoCountIntegersFloats() {
    let intCnt = 0;
    let floatCnt = 0;
    myStack.forEach(function (element) {

        if (Number.isInteger(element)) {
            intCnt++;
        }
        else if ((!isNaN(element) && !Number.isInteger(element))) {
            floatCnt++;
        }
    }
    );
    prArr(myStack);
    console.log(`\nNo of Integer elements in myStack : '${intCnt}' `);
    console.log(`\nNo of Float elements in myStack : '${floatCnt}' `);
}

function demoFixDecimalPlaces() {
    let n = prompt("\nEnter number of decimal places to fix for float numbers : ");

    for (let i = 0; i < myStack.length; i++) {
        let el = myStack[i];
        if (!isNaN(el) && !Number.isInteger(el)) {
            myStack[i] = myStack[i].toFixed(n);
        }
    };
    prArr(myStack);
}
function demoReduce() {
    let res = myStack.reduce((total, item) => total + item, 0);
    prArr(myStack);
    console.log(`\nSum of all elements in myStack is : '${res.toFixed(2)}' `);
}

