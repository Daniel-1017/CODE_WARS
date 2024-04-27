/* 
Your task it to return true if the fractional part (rounded to 1 digit) of the result (a / b) exists, more than 0 and is multiple of n. Otherwise return false. (For Python return True or False)

All arguments are positive digital numbers.

Rounding works like toFixed() method. (if more than...5 rounds up)

Find examples below:


isMultiple(5, 2, 3) -> false // 2.5 -> 5 is not multiple of 3
isMultiple(5, 3, 4) -> false // 1.7 -> 7 is not multiple of 4
isMultiple(5, 4, 3) -> true // 1.3 -> 3 is multiple of 3
isMultiple(666, 665, 2) -> false // 1.0 -> return false
*/

// MY SOLUTION
const isMultiple = (a, b, n) => {
  const res = (a / b).toFixed(1);
  const reminder = res[res.length - 1];
  return reminder != 0 && !(reminder % n);
};

// SOLUTION OF OTHERS
function isMultiple(a, b, n) {
  const r = Math.round((a * 10) / b) % 10 | 0;
  return r > 0 && r % n === 0;
}
