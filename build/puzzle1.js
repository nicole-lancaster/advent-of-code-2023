"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePuzzleInput = void 0;
const fs_1 = __importDefault(require("fs"));
const parsePuzzleInput = (inputFile) => {
    const inputData = fs_1.default
        .readFileSync(`${__dirname}/${inputFile}`, "utf-8")
        .toString();
    console.log("hi");
    return [[""]];
};
exports.parsePuzzleInput = parsePuzzleInput;
