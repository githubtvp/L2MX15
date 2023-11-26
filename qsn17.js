function prime(num) {
  for (let i = 2; i < num; i++) {
      if (num % i === 0) {
          return false;//not a prime 
      }
  }
  return num !== 1;//if num is not 1 then returns num as prime
}

function printPrimes(n) {
  const primes = [];
  for (let i = 2; i <= n; i++) {
      if (prime(i)) {
          primes.push(i);
      }
  }
  console.log(`Prime numbers between 1 and ${n} are: ${primes}`);
}
const n = 50;
printPrimes(n);
