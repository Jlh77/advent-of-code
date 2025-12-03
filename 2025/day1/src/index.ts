import { input } from "./input";

const data = input.split("\n");

const solution = (instructions: string[]) => {
  let currentRotation = 50;
  let zeroesLandedOn = 0;
  let zeroesPassed = 0;

  instructions.forEach((instruction) => {
    const direction = instruction[0];

    const amountToMove =
      parseInt(instruction.slice(1)) * (direction === "L" ? -1 : 1);

    if (amountToMove > 0) {
      zeroesPassed +=
        Math.floor((currentRotation + amountToMove) / 100) -
        Math.floor(currentRotation / 100);
    } else {
      zeroesPassed +=
        Math.floor((currentRotation - 1) / 100) -
        Math.floor((currentRotation - 1 + amountToMove) / 100);
    }

    currentRotation = (currentRotation + amountToMove + 100) % 100;

    if (currentRotation === 0) zeroesLandedOn++;
  });

  return {
    zeroesLandedOn,
    zeroesPassed,
  };
};

const { zeroesLandedOn, zeroesPassed } = solution(data);

console.log("Part 1 Answer:", zeroesLandedOn);

console.log("Part 2 Answer:", zeroesPassed);
