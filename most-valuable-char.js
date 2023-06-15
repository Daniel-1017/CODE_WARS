/* 
In this Kata, you will be given a string and your task is to return the most valuable character. The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the alphabetically lowest character. [For Golang return rune]

All inputs will be lower case.

For example:
solve('a') = 'a'
solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
solve("axyzxyz") = 'x'
*/

function solve(st) {
  const max = { max: 0, char: st[0] };
  for (let i of st) {
    const val = st.lastIndexOf(i) - st.indexOf(i);
    if (val > max.max) {
      max.max = val;
      max.char = i;
    } else if (val === max.max) {
      if (max.char.charCodeAt() > i.charCodeAt()) max.char = i;
    }
  }
  return max.char;
}
