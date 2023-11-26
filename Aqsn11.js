let n = 300456780;
let m = 10;
if (n < 10) {
  console.log(`Only single digit, the number is ${n}`);
}
else {
  let r = parseInt(n % m); 
  console.log(`Last digit is : ${r}`);
  while (n >= m) {
    n = parseInt(n / m);    
  }
  console.log(`First digit is : ${n}`);
}

