"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puzzle1_1 = require("./puzzle1");
describe("parsePuzzleInput function", () => {
    test("should successfully read input file and parse data", () => {
        const input = "test-input.txt";
        const output = (0, puzzle1_1.parsePuzzleInput)(input);
        expect(output).toEqual([
            ["1abc2"],
            ["pqr3stu8vwx"],
            ["a1b2c3d4e5f"],
            ["treb7uchet"]
        ]);
    });
});