function generateFibonacci(n) {
  const fibonacciSeries = [0, 1];
  for (let i = 2; i < n; i++) {
      fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
  }
  return fibonacciSeries;
}

const n = 15;
const fibonacciSeries = generateFibonacci(n);
console.log(`Fibonacci series up to ${n} terms: ${fibonacciSeries}`);
