import myInput from "./input.js"

function solveSafePassword(inputData) {
  const instructions = inputData.trim().split("\n")

  // Startposition
  let currentPos = 50
  let zeroHits = 0

  instructions.forEach((instruction) => {
    instruction = instruction.trim()
    if (!instruction) return

    // Hämta riktning (L/R) och siffra
    const direction = instruction[0]
    const amount = parseInt(instruction.substring(1))

    if (direction === "R") {
      // Rotera höger (addera)
      currentPos = (currentPos + amount) % 100
    } else if (direction === "L") {
      // Rotera vänster (subtrahera)
      currentPos = (currentPos - amount) % 100

      if (currentPos < 0) {
        currentPos += 100
      }
    }

    if (currentPos === 0) {
      zeroHits++
    }
  })

  return zeroHits
}

console.log("Answer:", solveSafePassword(myInput))
