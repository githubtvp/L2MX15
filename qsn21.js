function twosComplement(binary) {
    let onesComplement = '';
    for (let i = 0; i < binary.length; i++) {
        // flip each bit for one's complement
        if (binary[i] === '0') {
            onesComplement += '1';
        } else if (binary[i] === '1') {
            onesComplement += '0';
        } else {
            // if the input string is not a valid binary number
            return 'Invalid input: not a binary number';
        }
    }

    let carry = 1;
    let twosComplement = '';
    for (let i = onesComplement.length - 1; i >= 0; i--) {
        const sum = parseInt(onesComplement[i]) + carry;
        twosComplement = (sum % 2) + twosComplement;
        carry = Math.floor(sum / 2);
    }
    return twosComplement;
}

const binaryNumber = '1010101';
const result = twosComplement(binaryNumber);
console.log(`Two's complement of ${binaryNumber} is ${result}`);
