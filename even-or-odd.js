/* 
Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"
*/

function evenOrOdd(str) {
  let oddCount = 0,
    evenCount = 0;
  for (let n of str) {
    if (n % 2) oddCount += Number(n);
    else evenCount += Number(n);
  }
  return oddCount > evenCount
    ? "Odd is greater than Even"
    : oddCount < evenCount
    ? "Even is greater than Odd"
    : "Even and Odd are the same";
}
