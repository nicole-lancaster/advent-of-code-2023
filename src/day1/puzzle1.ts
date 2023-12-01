import fs from "fs"

export const parsePuzzleInput = (inputFile: string): string[][] => {
  const inputData = fs
    .readFileSync(`${__dirname}/${inputFile}`, "utf-8")
    .toString()

  console.log(inputData)
  return [[""]]
}