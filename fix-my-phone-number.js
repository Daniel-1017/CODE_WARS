/* 
Phone numbers are stored as strings and comprised of 11 digits, eg '02078834982' and must always start with a 0.

However, something strange has happened and now all of the phone numbers contain lots of random characters, whitespace and some are not phone numbers at all!

For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' and there are lots more lines that we need to check.

The Task
Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".
*/

function isItANum(str) {
  const num = str.match(/(\d+)/g);

  if (num && num.join("").length === 11 && num.join("")[0] === "0") {
    return num.join("");
  } else {
    console.log("Not a phone number");
    return "Not a phone number";
  }
}

isItANum("stop calling me no I have never been in an accident");
