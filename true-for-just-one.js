/* 
Task
Create a function called one that accepts two params:

a sequence
a function
and returns true only if the function in the params returns true for exactly one (1) item in the sequence.

Example
one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten) -> true
one([1, 3, 5, 6, 99, 88, 3], bigger_than_ten) -> false
one([1, 3, 5, 6, 5, 1, 3], bigger_than_ten) -> false
*/

// MY SOLUTION
function one(arr, fun) {
  let coutner = 0;
  for (let item of arr) {
    if (fun(item)) coutner++;
    if (coutner > 1) return false;
  }
  return coutner === 1;
}

// SOLUTION OF OTHERS
function one(arr, fun) {
  return arr.filter(fun).length === 1;
}
