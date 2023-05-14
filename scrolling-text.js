/* 
Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
Good luck!
*/

// MY SOLUTION
function scrollingText(text) {
  text = text.toUpperCase();
  const array = [];
  for (let i = 0; i < text.length; i++) {
    array.push(text);
    text = text.slice(1) + text[0];
  }
  return array;
}

// OTHERS SOLUTION
function scrollingText(text) {
  text = text.toUpperCase();

  return [...text].map((_, i) => text.slice(i) + text.slice(0, i));
}

function scrollingText(text) {
  let result = [];

  for (var i = 0; i < text.length; i++) {
    result.push((text.slice(i) + text.slice(0, i)).toUpperCase());
  }

  return result;
}
