/* 
What is the rank of a playing card? The function takes a string like '2c' or 'Kh' and returns a value based on rank of the card. The first character corresponds to the rank of the card and the second character corresponds to the suit of the card. Cards 2-9 should return the corresponding number. T returns 10, J => 11, Q => 12, K => 13 and A => 14. Otherwise the rank should be returned as 0.

For example:

rank('2c') == 2;
rank('Tc') == 10;
rank('As') == 14;
rank('1c') == 0; // There is no card '1'
Suits can be disregarded.
*/

const rankMap = {
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
};

const rank = ([...card]) => {
    const [rank] = card;
    if (rank < 10 && rank > 1) return +rank;
    return rankMap[rank] ?? 0;
};
