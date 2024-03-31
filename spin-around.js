/* 
Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

Worked Example
["right", "right", "right", "right", "left", "right"] ➞ 1
# You spun right 4 times (90 * 4 = 360)
# You spun left once (360 - 90 = 270)
# But you spun right once more to make a full rotation (270 + 90 = 360)
Examples
["left", "right", "left", "right"] ➞ 0

["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2

["left", "left", "left", "left"] ➞ 1
Notes
Return a positive number.
All tests will only include the words "right" and "left".
*/

const spinAround = turns => {
    const rightDegrees = turns.filter(turn => turn === "right").length * 90;
    const leftDegrees = turns.filter(turn => turn === "left").length * 90;

    return Math.floor(Math.abs(rightDegrees - leftDegrees) / 360);
}