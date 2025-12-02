import { input } from "./input";

function dial(instructions: string): number {
  const instructionsList = instructions.split("\n");

  const startingPosition = 50;

  let position = startingPosition;

  const firstPosition = 0;

  const lastPosition = 90;

  instructionsList.forEach((instruction) => {
    // "L" or "R"
    const direction = instruction.substring(0, 1);

    let amountToTurn = Number(instruction.split(direction)[1]);

    if (direction === "L") {
      amountToTurn = -Math.abs(amountToTurn);
    }

    position += amountToTurn;

    // Remember it starts at 0, so take away one

    if (position > lastPosition) position -= lastPosition - 1;
    else if (position < firstPosition) position += lastPosition - 1;
  });

  return position;
}

// Test/Result

const answer = dial(input);

console.log("ANSWER: ", answer);
