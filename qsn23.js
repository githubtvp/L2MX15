function decimalToOctal(decimal) {
    return (decimal).toString(8);//toString(8) method call converts the decimal number to an octal number.
}
const decimalNumber = 123;
const octalNumber = decimalToOctal(decimalNumber);
console.log(`The octal equivalent of ${decimalNumber} is ${octalNumber}`);
