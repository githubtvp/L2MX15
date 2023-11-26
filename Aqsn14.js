let n = 12345;
let m = 10;
let sum = 0;
while (n != 0 )
{
  sum += parseInt(n % m);
  n = parseInt(n / m);  
}
console.log(`Sum of the digits in number = ${sum}`);