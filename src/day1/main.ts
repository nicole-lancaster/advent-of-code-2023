import { parsePuzzleInput, solvePuzzle } from "./puzzle1";

const inputFile = "./puzzle-input.txt"

const parsedPuzzleInput = parsePuzzleInput(inputFile)
const puzzleAnswer = solvePuzzle(parsedPuzzleInput)