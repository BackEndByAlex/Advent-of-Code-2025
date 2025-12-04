import myInput from "./input.js"

function solvePartTwo(inputData) {
  const instructions = inputData.trim().split("\n")

  let currentPos = 50
  let totalZeroHits = 0

  instructions.forEach((instruction) => {
    instruction = instruction.trim()
    if (!instruction) return

    const direction = instruction[0]
    const amount = parseInt(instruction.substring(1))

    // to count every time we hit 0 "en route".
    for (let i = 0; i < amount; i++) {
      if (direction === "R") {
        // Moving Right (Numbers go up)
        currentPos++
        if (currentPos === 100) {
          currentPos = 0 // Wrap around 99 -> 0
        }
      } else {
        // Moving Left (Numbers go down)
        currentPos--
        if (currentPos === -1) {
          currentPos = 99 // Wrap around 0 -> 99
        }
      }

      // Check if this specific click landed on 0
      if (currentPos === 0) {
        totalZeroHits++
      }
    }
  })

  return totalZeroHits
}

console.log("Answer:", solvePartTwo(myInput))
