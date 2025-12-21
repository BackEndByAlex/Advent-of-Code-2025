import input from "./input.js"

function solveForkliftPartTwo(puzzleInput) {
  let grid = puzzleInput
    .trim()
    .split("\n")
    .map((row) => row.split(""))
  const rows = grid.length
  const cols = grid[0].length

  let totalRemoved = 0

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]

  while (true) {
    let rollsToRemove = []

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === "@") {
          let neighborCount = 0

          for (let [dr, dc] of directions) {
            const nr = r + dr
            const nc = c + dc

            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
              if (grid[nr][nc] === "@") {
                neighborCount++
              }
            }
          }

          if (neighborCount < 4) {
            rollsToRemove.push([r, c])
          }
        }
      }
    }

    if (rollsToRemove.length === 0) {
      break
    }

    totalRemoved += rollsToRemove.length

    for (let [r, c] of rollsToRemove) {
      grid[r][c] = "."
    }
  }

  return totalRemoved
}

// --- TEST CASE ---
const exampleInput = input

console.log("Total removable rolls:", solveForkliftPartTwo(exampleInput))
