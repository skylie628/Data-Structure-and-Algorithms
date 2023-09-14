/**
 * https://www.codingame.com/ide/puzzle/power-of-thor-episode-1
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(" ");
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position
//moving position
let x = initialTx;
let y = initialTy;
//unit vector of moving direction
let xVector = initialTx < lightX ? 1 : initialTx > lightX ? -1 : 0;
let yVector = initialTy < lightY ? 1 : initialTy > lightY ? -1 : 0;
// game loop
while (true) {
  const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
  //goal
  if (x == lightX && y == lightY) {
    return;
  }
  // y-axis moving
  if (x == lightX) {
    if (yVector < 0) {
      y += yVector;
      console.log("N");
    }
    if (yVector > 0) {
      y += yVector;
      console.log("S");
    }
    continue;
  }
  //x-axis moving
  if (y == lightY) {
    if (xVector < 0) {
      x += xVector;
      console.log("W");
    }
    if (xVector > 0) {
      x += xVector;
      console.log("E");
    }
    continue;
  }

  //x != lightX && y != lightY:
  //x-y axis moving
  y += yVector;
  x += xVector;

  if (yVector < 0 && xVector < 0) {
    console.log("NW");
    continue;
  }
  if (yVector < 0 && xVector > 0) {
    console.log("NE");
    continue;
  }
  if (yVector > 0 && xVector > 0) {
    console.log("SE");
    continue;
  }
  if (yVector > 0 && xVector < 0) {
    console.log("SW");
    continue;
  }

  // A single line providing the move to be made: N NE E SE S SW W or NW
  console.log(" ");
}
