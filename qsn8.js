let n = 123456789;
let m = 10;
let count = 0;
while (n != 0 )
{
  n = parseInt(n / m);
  count++;
}
console.log(`No of digits in number = ${count}`);