/* 
You received an array with two strings. Create a function that will return their product as a string. E.g.

arrMultiply(['9','6']) should return '54'
*/

function arrMultiply(arr) {
  const [a, b] = arr;
  return +a * +b + "";
}
