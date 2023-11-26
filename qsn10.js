let n = 12345;
let m = 10;
let product = 1;
while (n != 0 )
{
  product *= parseInt(n % m);
  n = parseInt(n / m);  
}
console.log(`Product of the digits in the number = ${product}`);