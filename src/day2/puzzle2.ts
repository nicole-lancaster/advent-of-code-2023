import fs from "fs"

export const parsePuzzleInput = (inputFile: string) => {
  const inputData = fs
    .readFileSync(`${__dirname}/${inputFile}`, "utf-8")
    .toString()
}