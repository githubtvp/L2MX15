function hexToBinary(hex) {
    const binary = parseInt(hex, 16).toString(2);
    /*The parseInt function is used to convert the hexadecimal number to a decimal number. 
    The second argument, 16, indicates that the string is in base 16 (hexadecimal).
    The .toString(2) method is then applied to the decimal number to convert it to a binary representation. 
    The argument 2 specifies that the number should be represented in base 2 (binary).
*/
    return binary;
}

const hexadecimalNumber = '2BC4';
const binaryNumber = hexToBinary(hexadecimalNumber);
console.log(`The binary equivalent of ${hexadecimalNumber} is ${binaryNumber}`);
