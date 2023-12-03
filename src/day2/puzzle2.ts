import fs from "fs"

type GameSetsArray = string[][]
type GameObjType = {
  [key: number]: GameSetsArray;
};

export const parsePuzzleInput = (inputFile: string) => {

  let gameObjArray: GameObjType[] = []
  let gameObj = {}

  const inputData = fs
    .readFileSync(`${__dirname}/${inputFile}`, "utf-8")
    .toString()

  const gamesArray: string[] = inputData.split("\n")
  const removingGameWord = gamesArray.map((game) => {
    return game.replaceAll("Game ", "")
  })
  const formattingGame = removingGameWord.map((game) => {
    game.split(": ", game.length - 1)
    const gameSets = game.split(": ")
    const arrayOfEachGameSet = gameSets[1].split("; ")
    return gameObj = { [game[0]]: arrayOfEachGameSet }
  })
  return formattingGame
}