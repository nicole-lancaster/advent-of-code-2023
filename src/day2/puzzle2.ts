import fs from "fs"

export type GameObjType = {
  [key: string]: GameSetsArray;
};
type GameSetsArray = string[]
type CubesInBagType = {
  blue: number,
  green: number,
  red: number
}
type GameSetObjType = { blue?: number, green?: number, red?: number }

export const parseAndFormatPuzzleInput = (inputFile: string): GameObjType[] => {

  let gameObj: GameObjType = {}

  const inputData = fs
    .readFileSync(`${__dirname}/${inputFile}`, "utf-8")
    .toString()

  const gamesArray: string[] = inputData.split("\n")
  const removedGameWord: string[] = gamesArray.map((game) => {
    return game.replaceAll("Game ", "")
  })
  const formattedGames = removedGameWord.map((game) => {
    const splitGameIdAndSets = game.split(": ")
    const gameSetsArray: GameSetsArray = splitGameIdAndSets[1].split("; ")
    return gameObj = { [game[0]]: gameSetsArray }
  })
  return formattedGames
}

export const solvingPuzzle = (parsedAndFormattedPuzzleInput: GameObjType[]): number => {
  let sumOfGameIds = 0
  let setArrayToObj: GameSetObjType = {}
  const cubesInBag: CubesInBagType = { blue: 14, red: 12, green: 13 }

  const arrayOfSingleSetArray = parsedAndFormattedPuzzleInput.map((game, index) => {
    let gameSetArray: GameSetsArray = game[index + 1]
    return gameSetArray.map((gameSet) => {
      return gameSet.split(", ")
    })
  })

  const separatingByColour = arrayOfSingleSetArray.flatMap((setArray) => {
    return setArray.map((set) => set.flatMap((colour) => colour.split(" ")))
  })

  separatingByColour.forEach((set) => {
    set.forEach((string, index) => {
      if (string === "blue" || string === "green" || string === "red") {
        const indexOfValueBeforeColour = set.indexOf(string) - 1
        setArrayToObj[string] = parseInt(set[indexOfValueBeforeColour])
      }
    })
  })
  return sumOfGameIds
}