/* 
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

// MY SOLUTION
const table = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

function rgb(...rgb) {
  return rgb.map(val => {
    let v = val;
    if (val < 0) v = 0;
    if (val > 255) v = 255;
    const value = Math.floor(v / 16);
    const reminder = v % 16;
    return table[value] + table[reminder];
  }).join``.padEnd(6, "0");
}

// SOLUTION OF OTHERS
function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
  if (d < 0) {
    return "00";
  }
  if (d > 255) {
    return "FF";
  }
  return ("0" + Number(d).toString(16)).slice(-2).toUpperCase();
}

function rgb(r, g, b) {
  return [r, g, b]
    .map(function (x) {
      return ("0" + Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    })
    .join("")
    .toUpperCase();
}

const rgb = (...arg) =>
  arg
    .map(it =>
      Math.max(Math.min(it, 255), 0).toString(16).padStart(2, "0").toUpperCase()
    )
    .join("");
