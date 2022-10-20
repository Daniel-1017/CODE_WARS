/* 
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

capitalizeFirst(['car','taco','banana']); ['Car','Taco','Banana']
*/

// MY SOLUTION
function capitalizeFirst(array) {
  let arr = [];

  for (let item of array) {
    arr = arr.concat(item[0].toUpperCase() + item.slice(1));
  }

  return arr;
}

capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']

// OTHER SOLUTION
function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']
