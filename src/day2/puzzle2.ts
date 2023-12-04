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
type ColorObject = Record<keyof CubesInBagType, number>;

type GameValue = ColorObject[];

export const parseAndFormatPuzzleInput = (inputFile: string): GameObjType[] => {

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

    const gameObj: GameObjType = { [splitGameIdAndSets[0]]: gameSetsArray }

    return gameObj
  })
  return formattedGames
}

export const solvingPuzzle = (parsedAndFormattedPuzzleInput: GameObjType[]): number => {
  let sumOfGameIds: number = 0
  const cubesInBag: CubesInBagType = { blue: 14, red: 12, green: 13 }

  const coloursAndValues = parsedAndFormattedPuzzleInput.map((singleGame) => {
    const gameId = Object.keys(singleGame)[0];
    const colourandNumOfCubesPerGame = singleGame[gameId].map((gameSet) => {
      const colourValuePairs = gameSet.split(',').map((colourValuePair) => {
        const [value, color] = colourValuePair.trim().split(' ');
        return { [color]: parseInt(value) };
      });
      return Object.assign(colourValuePairs);
    });
    return { [gameId]: colourandNumOfCubesPerGame };
  })

  const possibleGamesArray: number[] = []
  coloursAndValues.forEach((game) => {
    const gameIDKey = Object.keys(game)[0];

    const gameValues: GameValue[] = game[gameIDKey];

    const isGamePossible = (c: ColorObject) => {
      let color: keyof ColorObject;
      if (c.blue) {
        color = "blue"
      }
      else if (c.green) {
        color = "green"
      } else {
        color = "red"
      }
      return c[color] <= cubesInBag[color]
    }

    const validGame = gameValues.every((a: GameValue) => {
      return a.every(isGamePossible)
    });

    if (validGame) {
      possibleGamesArray.push(parseInt(gameIDKey));
    }
  })

  possibleGamesArray.forEach((gameId: number) => {
    sumOfGameIds += gameId;
  });
  return sumOfGameIds;
}