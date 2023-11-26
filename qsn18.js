/*
function countDigits(num) {
  return num.toString().length;
}
*/

function isArmstrongNo(num) {
  const numString = num.toString();//to access indvly by index
  const len = numString.length;//get length - to raise individual digit to the power of len
  let sum = 0;
  for (let i = 0; i < len; i++) {
      sum += Math.pow(parseInt(numString[i]), len);
  }
  return sum === num;// if sum equal to num passd
}

function printArmstrongNumbers(n) {
  const armstrongNumbers = [];
  for (let i = 1; i <= n; i++) {
      if (isArmstrongNo(i)) {
          armstrongNumbers.push(i);
      }
  }
  console.log(`Armstrong numbers between 1 and ${n} are: ${armstrongNumbers}`);
}

const n = 1000;
printArmstrongNumbers(n);
