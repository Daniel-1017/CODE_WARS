/* 
Given an array of integers, and a target integer, return the largest integer from the array that is less than or equal to the target.

If there is no number that is less than or equal to the target number then return undefined.

The array of integers may be empty, but will always be an array.
*/

function priceIsRight(arr, target) {
  let result = undefined;

  for (const num of arr) {
    if (num <= target && (result === undefined || num > result)) {
      result = num;
    }
  }

  return result;
}
