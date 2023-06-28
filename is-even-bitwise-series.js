/* 
Is the number even?
If the numbers is even return true. If it's odd, return false.

Oh yeah... the following symbols/commands have been disabled!

use of %
use of .even? in Ruby
use of mod in Python
*/

// MY SOLUTION
const isEven = function (n) {
  if (Number.isInteger(n / 2)) return true;
  return false;
};

// SOLUTION OF OTHERS
function isEven(n) {
  return !(n & 1);
}
