import fs from "fs"

export const parsePuzzleInput = (inputFile: string): string[][] => {
  const inputData = fs
    .readFileSync(`${__dirname}/${inputFile}`, "utf-8")
    .toString()

  const singleLinesArray: string[] = inputData.split("\n")
  const nestedArrayOfLines = singleLinesArray.map((line) => {
    return [line]
  })
  return nestedArrayOfLines
}

export const solvePuzzle = (parsedPuzzleInput: string[][]): number => {
  const isAlphabetChar = /([A-Z])+/gi
  let onlyNumsArray: string[] = []
  let sum: number = 0

  parsedPuzzleInput.forEach((line) => {
    const onlyNumberStrings = line[0].replaceAll(isAlphabetChar, "")
    return onlyNumsArray.push(onlyNumberStrings)
  })

  onlyNumsArray.forEach((num) => {
    if (num.length === 2) {
      sum += parseInt(num)
    } else {
      let firstAndLastDigit: string = `${num[0]}${num.charAt(num.length - 1)}`
      sum += parseInt(firstAndLastDigit)
    }
  })
  return sum;
}