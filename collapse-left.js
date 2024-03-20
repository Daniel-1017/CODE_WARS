/* 
Task
Write a function that takes an array containing numbers and functions. The output of the function should be an array of only numbers. So how are we to remove the functions from the array?

All functions must be applied to the number before it prior to the function being discarded from the array. It is as if the functions are collapsing left in the array modifying the first number to the left of the function. The functions should apply in order of index in the array. After a function has been applied to the number before it, it should be "removed" from the array to allow any following functions to also modify that new number.

Example
[ 3, f(x) = x + 2, f(x) = x * 5, 4, f(x) = x - 1 ] => [ 25, 3 ]
because

[ (3 + 2) * 5, 4 - 1 ]
Note how all functions collapsed into the closest number to the left; they did not produce new numbers into the array, but modified existing ones.

Notes
If a function comes first in the array, it should behave as if it were passed in 0:
[ f(x) = x + 2, 4 ] => [0 + 2, 4]
An empty array passed in must return an empty array.
Functions will always take exactly one, number, parameter.
If an array only contains numbers, the array should be returned without any modifications.
*/

// MY SOLUTION
const operationArguments = arr => {
    const hasFunctions = arr.find(item => typeof item === "function");

    if (!hasFunctions) return arr;

    const output = [];
    let value = typeof arr[0] === "number" ? arr[0] : 0, firstFnFound = false;

    for (let i = 0; i < arr.length; i++) {
        if (!firstFnFound && typeof arr[i] === "function") firstFnFound = true;

        if (typeof arr[i] === "function") {
            value = arr[i](value);
            continue;
        }

        if (firstFnFound) {
            output.push(value);
            value = arr[i];
            continue;
        }

        if (typeof arr[i + 1] !== "function") {
            output.push(value);
            value = arr[i + 1];
        }
    }

    if (typeof arr[arr.length - 1] === "function") output.push(value);
    else output.push(arr[arr.length - 1]);

    return output;
}

// SOLUTION OF OTHERS
function operationArguments(arr){
    const queue = [];
  
    for (const x of arr)
      queue.push(typeof x === "function" ? x(queue.pop() ?? 0) : x);
  
    return queue;
  }