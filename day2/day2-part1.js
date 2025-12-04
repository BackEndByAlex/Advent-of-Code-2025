import input from "./input.js"

function solveDay2(inputData) {
  // then split by comma to get an array of ranges (e.g., ["11-22", "95-115"])
  const rangeStrings = inputData.replace(/\n/g, "").split(",")

  let totalSum = 0n

  // check "XX" pattern
  function isInvalidID(num) {
    const s = num.toString()

    // it cannot be split into two equal halves. Return false
    if (s.length % 2 !== 0) return false

    const mid = s.length / 2

    // Extract the first half and the second half of the string
    const firstHalf = s.substring(0, mid)
    const secondHalf = s.substring(mid)

    // Return true if both halves are identical (e.g., "123" === "123")
    return firstHalf === secondHalf
  }
  for (const rangeStr of rangeStrings) {
    //contains a dash ?
    if (!rangeStr.includes("-")) continue

    const [startStr, endStr] = rangeStr.split("-")

    // Parse them into actual numbers
    const start = parseInt(startStr)
    const end = parseInt(endStr)

    // Inner loop: Check every single number strictly between start and end
    for (let i = start; i <= end; i++) {
      // If the number matches the "XX" pattern...
      if (isInvalidID(i)) {
        // ...add it to the total sum (converting i to BigInt to match totalSum type)
        totalSum += BigInt(i)
      }
    }
  }

  // Convert the BigInt result back to a string for output
  return totalSum.toString()
}

console.log("Answer:", solveDay2(input))
