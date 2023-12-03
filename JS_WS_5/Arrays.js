const prompt = require('prompt-sync')();

const arr = [0, 1, 2, 3, 4, 5, 6];
const myArr = [[0], [1, 2], [3, 4], [5, 6]];

function displayMenu() {
    console.log("a. Enter 'a' - Demonstarte arr.push('1')");
    console.log("b. Enter 'b' - Demonstrate arr.splice(indx, nEls)");
    console.log("c. Enter 'c' - Demonstrate console.log(arr) - display elements");
    console.log("d. Enter 'd' - Demonstrate arr.sort()");
    console.log("e. Enter 'e' - Demonstrate arr.includes(El) - Find an element in the array");
    console.log("f. Enter 'f' - Demonstrate arr.length");
    console.log("g. Enter 'g' - Demonstrate arr.toString()");
    console.log("h. Enter 'h' - Demonstrate arr.join('-')");
    console.log("j. Enter 'j' - Demonstrate arr.pop()");
    console.log("k. Enter 'k' - Demonstrate arr.slice(stIndx, endIndx)");
    console.log("l. Enter 'l' - Demonstrate arr.flat())");
    console.log("m. Enter 'm' - Demonstrate arr1.concat(arr2, arr3) )");
    console.log("n. Enter 'n' - Demonstrate arr.shift() )");
    console.log("o. Enter 'o' - Demonstrate arr.unshift() )");
    console.log("q. Enter 'q' to exit program");
}

function addElement() {
    while (true) {
        let choice = prompt("Enter 1 to add elements or 0 to exit adding. \n");
        switch (choice) {
            case "0":
                console.log("Ended adding elements\n");
                break;
            case "1":
                let element = prompt("\nEnter the element to add: \n");
                arr.push(element);
                console.log(`\nNew element '${element}' added to the array.`);
                break;
            default:
                console.log("\nInvalid choice. Please try again.");
        }
        if (choice == 0) {
            break;
        }
    }
}

function getLength() {
    let len = arr.length;
    console.log("Length of array = " + len);
}

function getArrayElementString() {
    let str = arr.toString();
    console.log(`Array elements as a string : \n ${str} `);
}

function joinArrayElements() {
    let str = arr.join('-');
    console.log(`Array elements joined as a string : \n ${str} `);
}

function popElement() {
    while (true) {
        let choice = prompt("Enter 1 to pop the last element or 0 to exit pop. \n");
        switch (choice) {
            case "0":
                console.log("End popping\n");
                break;
            case "1":
                let lastElPopped = arr.pop();
                console.log(`\nLast element '${lastElPopped}' popped out of the array.`);
                break;
            default:
                console.log("\nInvalid choice.");
        }
        if (choice == 0) {
            break;
        }
    }
}

function demoSpliceArray() {
    let index = prompt("Enter the index of the element to remove: ");
    if (index >= 0 && index < arr.length) {
        let el = arr[index];
        arr.splice(index, 1);
        console.log("New spliced Array: ", arr);
        console.log(`Element ${el} at index ${index} removed from the array.`);
    } else {
        console.log("Invalid index.");
    }
}

function demoSliceArray() {
    let stIndx = prompt("Enter the index to start slice: ");
    let endIndx = prompt("Enter the last index to not include in sliced array: ");
    if (stIndx >= 0) {
        let el = arr[stIndx];
        const slicedArr = arr.slice(stIndx, endIndx);
        console.log("Sliced Array: ", slicedArr);
    } else {
        console.log("Invalid index.");
    }
}

function demoFlattenArray() {
    const newFlattenedArray = myArr.flat();
    console.log("Flattened array : ", newFlattenedArray);
}

function demoConcatArrays() {
    const arr3 = [5, 6, 7, 8];
    const myFlatArr = myArr.flat();
    const newConcatenatedArray = arr.concat(myFlatArr, arr3);
    console.log("Flattened array : ", newConcatenatedArray);
}

function demoShiftElements() {
    const arr3 = [5, 6, 7, 8];
    console.log("Array before shift :", arr3);    
    let shiftedOutEl = arr3.shift();
    console.log("Array after shift(1st element knocked out) :", arr3);   
    console.log("Shifted Out Element is :", shiftedOutEl);
}

function demoUnShiftElements() {
    const arr3 = [5, 6, 7, 8];
    console.log("Array before UnShift :", arr3);    
    let newLen = arr3.unshift('3');
    console.log("Array after UnShift :", arr3);      
    console.log("After unshift new array length is :", newLen);
}


function displayArray() {
    console.log("Array: ", arr);
}

function sortArray() {
    arr.sort();
    console.log("Array sorted.", arr);
}

function findElement() {
    let element = prompt("Enter the element to find: ");
    if (arr.includes(element)) {
        console.log("Element found in the array.");
    } else {
        console.log("Element not found in the array.");
    }
}

while (true) {
    displayMenu();
    let choice = prompt("Enter your choice: ");

    switch (choice) {
        case "a":
            addElement();
            break;
        case "b":
            demoSpliceArray();
            break;
        case "c":
            displayArray();
            break;
        case "d":
            sortArray();
            break;
        case "e":
            findElement();
            break;
        case "f":
            getLength();
            break;
        case "g":
            getArrayElementString();
            break;
        case "h":
            joinArrayElements();
            break;
        case "j":
            popElement();
            break;
        case "k":
            demoSliceArray();
            break;
        case "l":
            demoFlattenArray();
            break;
        case "m":
            demoConcatArrays();
            break;
        case "n":
            demoShiftElements();
            break;
        case "o":
            demoUnShiftElements();
            break;
        case "q":
            console.log("Exiting program.");
            break;
        default:
            console.log("Invalid choice. Please try again.");
            break;
    }
    if (choice === 'q') {
        break;
    }
}
