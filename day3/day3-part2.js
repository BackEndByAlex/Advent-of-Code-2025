import input from "./input.js"

const banks = input
  .replace(/export const input =/, "")
  .trim()
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 0 && /^\d+$/.test(line))

function solvePartTwo(banks) {
  let totalOutput = 0n

  banks.forEach((bank) => {
    const digits = bank.split("").map(Number)
    const needed = 12
    let currentIdx = 0
    let result = ""

    for (let k = 0; k < needed; k++) {
      const digitsRemainingToFind = needed - 1 - k

      const searchLimit = digits.length - digitsRemainingToFind

      let bestDigit = -1
      let bestIdx = -1

      for (let i = currentIdx; i < searchLimit; i++) {
        if (digits[i] > bestDigit) {
          bestDigit = digits[i]
          bestIdx = i
          if (bestDigit === 9) break
        }
      }

      result += bestDigit

      currentIdx = bestIdx + 1
    }

    totalOutput += BigInt(result)
  })

  return totalOutput.toString()
}

console.log("Total Output Joltage:", solvePartTwo(banks))
