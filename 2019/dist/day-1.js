"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var sumArr = function (arr) { return arr.reduce(function (a, b) { return a + b; }, 0); };
var getInput = function () {
    fs_1.default.readFile("input/day-1.txt", "utf8", function (error, data) {
        var lines = data.split("\n").map(Number);
        var fuelNeed = lines.map(function (mass) {
            return Math.floor(mass / 3) - 2;
        });
        var fuel = sumArr(fuelNeed);
        console.log("Total fuel needed: ", fuel);
    });
};
getInput();
//# sourceMappingURL=day-1.js.map