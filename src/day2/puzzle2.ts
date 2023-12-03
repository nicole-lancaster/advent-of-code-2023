import fs from "fs"

type GameSetsArray = string[]
type GameObjType = {
  [key: string]: GameSetsArray;
};

export const parsePuzzleInput = (inputFile: string): GameObjType[] => {

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