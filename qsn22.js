function binaryToDecimal(binary) {
    const decimal = parseInt(binary, 2);//gets the decimal equivqlent
    return decimal;
}

const binaryNumber = '1010101';
const decimalNumber = binaryToDecimal(binaryNumber);
console.log(`The decimal equivalent of ${binaryNumber} is ${decimalNumber}`);
