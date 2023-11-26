let n = prompt("Enter a number : ", "0");
//let n = 12345;
let m = 10;
let digToPr = 1;
while (n != 0 )
{
  digToPr = parseInt(n % m);
  console.log(digToPr);
  n = parseInt(n / m);  
}
