/* 
Given a string of numbers and a number n, peel away the pairs of digits that add up to n (starting from index 0). The numbers in the pair don't have to be adjacent to each other, but they should be paired with the closest digit to the right of them that sums to n.

Return the new string with those pairs removed.

peelPairs('14642', 3) => '464'
peelPairs('732374', 6) => '77' 
peelPairs('245638363', 10) => '53363'
*/

const peelPairs = ([...str], n) => {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            // prettier-ignore
            const n1 = str[i], n2 = str[j];
            if (n1 !== "" && n2 !== "" && +n1 + +n2 === n) str[i] = str[j] = "";
        }
    }

    return str.join``;
};
