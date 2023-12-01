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