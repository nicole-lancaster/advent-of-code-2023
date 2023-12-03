import { GameObjType, parseAndFormatPuzzleInput, solvingPuzzle } from "./puzzle2";

describe("Day 2 parseAndFormatPuzzleInput function", () => {
  test("should successfully read input file, parse data and format", () => {
    const input = "test-input.txt";
    const output = parseAndFormatPuzzleInput(input);
    expect(output).toEqual([
      {
        1: ['3 blue, 4 red',
          '1 red, 2 green, 6 blue',
          '2 green']
      },
      {
        2: ['1 blue, 2 green',
          '3 green, 4 blue, 1 red',
          '1 green, 1 blue']
      },
      {
        3: [
          '8 green, 6 blue, 20 red',
          '5 blue, 4 red, 13 green',
          '5 green, 1 red'
        ]
      },
      {
        4: [
          '1 green, 3 red, 6 blue',
          '3 green, 6 red',
          '3 green, 15 blue, 14 red'
        ]
      },
      {
        5: ['6 red, 1 blue, 3 green',
          '2 blue, 1 red, 2 green']
      }])
  });
});

describe("Day 2 solvingPuzzle function", () => {
  test("should return a number which is the sum of all game IDs which meet the criteria in the instructions", () => {
    const input: GameObjType[] = [
      { "1": ["3 blue, 4 red", "1 red, 2 green, 6 blue", "2 green"] },
      { "2": ["1 blue, 2 green", "3 green, 4 blue, 1 red", "1 green, 1 blue"] },
      { "3": ["8 green, 6 blue, 20 red", "5 blue, 4 red, 13 green", "5 green, 1 red"] },
      { "4": ["1 green, 3 red, 6 blue", "3 green, 6 red", "3 green, 15 blue, 14 red"] },
      { "5": ["6 red, 1 blue, 3 green", "2 blue, 1 red, 2 green"] }
    ]
    const output = solvingPuzzle(input);
    expect(output).toBe(8)
  });
});