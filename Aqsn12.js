let n = 34567;
let m = 10;
if (n < 10) {
  console.log(`Only single digit, the sum of number is ${n}`);
}
else 
{
  let r = parseInt(n % m); ;
  let sum = r;
  console.log(`Last digit is : ${r}`);
  while (n >= m) {
    n = parseInt(n / m);    
  }
  sum += n;
  console.log(`First digit is : ${n}`);
  console.log(`Sum of first and last digit is : ${sum}`);
}