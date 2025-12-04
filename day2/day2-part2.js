import input from "./input.js"

function solveDay2Part2(inputData) {
  // remove newlines and split by comma to get the ranges
  const rangeStrings = inputData.replace(/\n/g, "").split(",")
  let totalSum = 0n

  // Checks if the number is formed by any repeating sequence
  function isInvalidID(num) {
    const s = num.toString()
    const L = s.length

    // Iterate through all possible pattern lengths.
    for (let patternLen = 1; patternLen <= L / 2; patternLen++) {
      if (L % patternLen !== 0) continue
      const pattern = s.substring(0, patternLen)

      // Calculate how many times this pattern would need to repeat to fill the string
      const repeats = L / patternLen

      if (pattern.repeat(repeats) === s) {
        return true // Match found! It's an invalid ID.
      }
    }

    // If tried all patterns and none matched, the ID is valid (safe).
    return false
  }

  // Iterate through all range strings
  for (const rangeStr of rangeStrings) {
    if (!rangeStr.includes("-")) continue

    // Parse the range "start-end"
    const [startStr, endStr] = rangeStr.split("-")
    const start = parseInt(startStr)
    const end = parseInt(endStr)

    for (let i = start; i <= end; i++) {
      if (isInvalidID(i)) {
        totalSum += BigInt(i)
      }
    }
  }

  return totalSum.toString()
}

console.log("Answer:", solveDay2Part2(input))
