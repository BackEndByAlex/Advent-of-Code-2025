import input from './input.js'

function calculateTotalJoltage(input) {
  const banks = input.trim().split('\n');
  let totalOutput = 0;

  banks.forEach((bank) => {
    const digits = bank.trim().split('').map(Number);
    let maxBankJoltage = 0

    for (let i = 0; i < digits.length - 1; i++) {
      const firstDigit = digits[i];

      const remainingBatteries = digits.slice(i + 1);
    const secondDigit = Math.max(...remainingBatteries);

      const currentJoltage = (firstDigit * 10) + secondDigit;

      if (currentJoltage > maxBankJoltage) {
        maxBankJoltage = currentJoltage;
      }
    }

    totalOutput += maxBankJoltage;
  });

  return totalOutput;
}

const exampleInput = input

console.log("Total Output:", calculateTotalJoltage(exampleInput)); 