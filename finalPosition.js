const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  for (const move of moves) {
    if (move === "north") {
      y++;
    } else if (move === 'south') {
      y--;
    } else if (move === 'west') {
      x--;
    } else {
      x++;
    }
    console.log(x,y)
  }
  return [x,y];
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves))