import fs from "fs";

const sumArr = (arr: number[]): number => arr.reduce((a, b) => a + b, 0);

const getInput = () => {
  fs.readFile("input/day-1.txt", "utf8", (error, data) => {
    const lines = data.split("\n").map(Number);

    const fuelNeed = lines.map((mass: number) => {
      return Math.floor(mass / 3) - 2;
    });

    const fuel = sumArr(fuelNeed);

    console.log("Total fuel needed: ", fuel);
  });
};

getInput();
