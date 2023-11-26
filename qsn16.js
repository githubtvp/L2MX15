function getFactorial(number) {
  let fact =1;
  for (let i = 1; i <= number; i++) {
      fact = fact * i;
  }
  return fact;
}
const number = 6;
const factorial = getFactorial(number);
console.log(`Factorial ${number} is : ${factorial}`);
