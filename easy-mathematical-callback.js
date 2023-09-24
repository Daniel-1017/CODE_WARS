/* 
Task
Write the processArray function, which takes an array and a callback function as parameters. The callback function can be, for example, a mathematical function that will be applied on each element of this array. Optionally, also write tests similar to the examples below.

Examples
Array [4, 8, 2, 7, 5] after processing with function

var myArray = [4, 8, 2, 7, 5];
myArray = processArray(myArray,function (a) {
  return a * 2;
});
will be [ 8, 16, 4, 14, 10 ].
*/

function processArray(arr, callback) {
  return arr.map(callback);
}
