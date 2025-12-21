import input from "./input.js"

function solveForkliftPuzzle(puzzleInput) {
  const grid = puzzleInput
    .trim()
    .split("\n")
    .map((row) => row.split(""))

  const rows = grid.length
  const cols = grid[0].length
  let accessibleCount = 0

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
          accessibleCount++
        }
      }
    }
  }

  return accessibleCount
}

const exampleInput = input

console.log("Accessible rolls:", solveForkliftPuzzle(exampleInput))
