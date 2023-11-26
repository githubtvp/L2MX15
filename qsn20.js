function onesComplement(binary) {
  let complement = '';
  for (let i = 0; i < binary.length; i++) {
      // flip each bit
      if (binary[i] === '0') {
          complement += '1';
      } else if (binary[i] === '1') {
          complement += '0';
      } else {
          // if the input string is not a valid binary number
          return 'Invalid input: not a binary number';
      }
  }
  return complement;
}

const binaryNumber = '1010101';
const result = onesComplement(binaryNumber);
console.log(`One's complement of ${binaryNumber} is ${result}`);
