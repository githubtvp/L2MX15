let number = 34567;
console.log("The number is 34567");//
function swapFirstLastDigit(number) {
  let numStr = number.toString();
  if (numStr.length > 1) {
      // Swap the first and last digits
      //i.e = last digit + middle digits starting from 1 to last but 1 + first didgit
      let modifiedStr = numStr[numStr.length - 1] + numStr.slice(1, -1) + numStr[0];
      // Convert the modified string back to an integer
      let modifiedNumber = parseInt(modifiedStr);
      return modifiedNumber;
  } else {
      // Return the number as it is if it has only one digit
      return number;
  }
}

let result = swapFirstLastDigit(number);
console.log(`The number ${number} with first and last digits swapped is ${result}.`);
