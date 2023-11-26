const prompt = require('prompt-sync')();

var myQueue = [123, '23MX', 3567, 987, 'Hi',  8.9];

while (true) {
    displayMenu();
    let choice = prompt("\nEnter your choice: ");
    switch (choice) {
        case "a":
            InsertElements();
            choice = 'q';
            break;
        case "b":
            removeAndShiftElements();
            choice = 'q';
            break;
        case "c":
            printTotalEls();
            choice = 'q';
            break;
        case "d":
            sortElements();
            choice = 'q';
            break;
        case "e":
            demoSplice();
            choice = 'q';
            break;
        case "f":
            demoSlice();
            choice = 'q';
            break;
        case "g":
            demoJoin();
            choice = 'q';
            break;
        case "h":
            demoMap();
            choice = 'q';
            break;
        case "q":
            console.log("Exiting program.");
            break;
        default:
            demoMap();
            choice = 'q';
            break;
    }
    if (choice === 'q') {
        break;
    }
}

function displayMenu() {
    console.log("a. Enter 'a' - Insert elements into queue");
    console.log("b. Enter 'b' - Remove elements from queue");
    console.log("c. Enter 'c' - Print number of elements in queue");
    console.log("d. Enter 'd' - Sort the queue");
    console.log("e. Enter 'e' - Remove 'n' elements from 'ith' position");
    console.log("f. Enter 'f' - Divide the queue into sub parts");
    console.log("g. Enter 'g' - Join all elements as single string");
    console.log("h. Enter 'h' - Convert all elements to string data type");
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
    console.log("\nElements are : \n")
    /*for (let i = 0; i < arr.length; i++) {
        process.stdout.write(arr[i] + " ");
    }*/
    console.log(arr);
}

function InsertElements() {
    prArr(myQueue);
    let el = prompt("\nEnter an element value to add to queue : ");
     myQueue.push(el);    
    prArr(myQueue);
}
function removeAndShiftElements() {
    prArr(myQueue);
    let val = 0;
    if (!(myQueue.length === 0)) {
        val = myQueue.shift();
    }
    console.log("\nElement shifted out is : " + val + "\n");
    prArr(myQueue);    
}

function printTotalEls() {
    prArr(myQueue);
    console.log("\nNo of elements in myQueue  : ", myQueue.length);
}

function sortElements() {
    prArr(myQueue);   
   // myQueue.sort( (a,b)=> a - b);   
    let sortedQueue = [...myQueue].sort((a, b) => a - b);
    console.log("\nSorted elements are :");
     prArr(sortedQueue);   
}

function demoSplice() {
    prArr(myQueue); 
    let n = prompt("\nEnter no of elements to remove from queue : ");
    let i = prompt(`\nEnter the ith position to remove '${n}' elements : `);    
    let removedQueue =  myQueue.splice(n,i, 'Hello', 'Welcome');
    prArr(removedQueue);   
    prArr(myQueue);   
}

function demoSlice() {
    prArr(myQueue); 
    let n = prompt("\nEnter the index position to split queue at : ");
    let slice1 = myQueue.slice(0,n);
    let slice2 = myQueue.slice(n);

    console.log("\nFirst part of myQueue : ");
    prArr(slice1); 

    console.log("\nSecond part of myQueue : ");
    prArr(slice2);   

    console.log("\nOriginal queue elements are :");
    prArr(myQueue);   
}

function demoJoin() {
    let str = myQueue.join('');
    process.stdout.write("\n " + str);
    str = myQueue.join(', ');
    console.log();
    process.stdout.write("\n " + str);
}

function demoMap() {
    let stringQueue = myQueue.map((element) => element.toString());    
   // console.log(stringQueue);
    console.log();
    process.stdout.write("\n " + stringQueue);    
}

