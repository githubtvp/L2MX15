function findFactors(number) {
  const factors = [];//declare array
  for (let i = 1; i <= number; i++) {
      if (number % i === 0)//strict comparision
       {
          factors.push(i);//append into array
      }
  }
  return factors;
}
const number = 36;
const factors = findFactors(number);
console.log(`The factors of ${number} are: ${factors}`);
