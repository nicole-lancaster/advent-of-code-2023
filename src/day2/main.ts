import { GameObjType, parseAndFormatPuzzleInput, solvingPuzzle } from "./puzzle2";

const inputFile = "./puzzle-input.txt"

const parsedAndFormattedPuzzleInput: GameObjType[] = parseAndFormatPuzzleInput(inputFile)
const puzzleAnswer: number = solvingPuzzle(parsedAndFormattedPuzzleInput)