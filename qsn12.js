let n = prompt("Enter a number : ", "0");
if (isPalindrome(n)) {
  console.log(`${n} is a palindrome.`);
} else {
  console.log(`${n} is not a palindrome.`);
}

function isPalindrome(num) {
  const numStr = num.toString();
  const len = numStr.length;
  for (let i = 0; i < len / 2; i++) {
      if (numStr[i] !== numStr[len - 1 - i]) {
          return false;
      }
  }
  return true;
}

