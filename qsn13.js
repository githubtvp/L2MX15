//returns an array of freq of each digit
function findDigitFrequency(number) {
  const digitFrequency = {};//declare an array of unknown size
  // Convert the number to a string
  const numberStr = number.toString();
  // Iterate through each character in the string
  for (let i = 0; i < numberStr.length; i++) {
      const digit = numberStr[i];
      console.log(digit);
      // If the digit is not already in the frequency object, set its count to 1
      if (!digitFrequency[digit]) {
          digitFrequency[digit] = 1;
      } else {
          // If the digit is already in the frequency object, increment its count by 1
          digitFrequency[digit] += 1;
      }
  }
  return digitFrequency;
}

const number = 1223334444;
const frequency = findDigitFrequency(number);
console.log(frequency);

