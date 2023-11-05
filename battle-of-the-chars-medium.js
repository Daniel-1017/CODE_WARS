/* 
Groups of characters decided to make a battle. Help them to figure out what group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

Rules
Each character has its own power:
  A = 1, B = 2, ... Y = 25, Z = 26
  a = 0.5, b = 1, ... y = 12.5, z = 13
Only alphabetical characters can and will participate in a battle.
Only two groups to a fight.
Group whose total power (a + B + c + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples
"One", "Two"  -->  "Two"
"ONE", "NEO"  -->  "Tie!"
*/

const calcPower = (chars) => {
  let power = 0;

  for (let char of chars) {
    const ascii = char.charCodeAt();

    if (ascii >= 97) power += (ascii - 96) / 2;
    else if (ascii >= 65) power += ascii - 64;
  }

  return power;
};

const battle = (x, y) => {
  const xPower = calcPower(x);
  const yPower = calcPower(y);

  if (xPower > yPower) return x;
  else if (xPower < yPower) return y;

  return 'Tie!';
};
