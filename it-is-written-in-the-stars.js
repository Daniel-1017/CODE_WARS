/* 
Were you ever interested in the phenomena of astrology, star signs, tarot, voodoo ? (ok not voodoo that's too spooky)...
Task:
Your job for today is to finish the star_sign function by finding the astrological sign, given the birth details as a Date object.
Start and end dates for zodiac signs vary on different resources so we will use this table to get consistent results:

Aquarius ------ 21 January - 19 February
Pisces --------- 20 February - 20 March
Aries ---------- 21 March - 20 April
Taurus -------- 21 April - 21 May
Gemini -------- 22 May - 21 June
Cancer -------- 22 June - 22 July
Leo ------------- 23 July - 23 August
Virgo ----------- 24 August - 23 September
Libra ----------- 24 September - 23 October
Scorpio -------- 24 October - 22 November
Sagittarius ---- 23 November - 21 December
Capricorn ----- 22 December - 20 January

Test info: 100 random tests (dates range from January 1st 1940 until now)
*/

const starSign = date => {
    const day = date.getDate(),
        month = date.getMonth();

    if ((month === 0 && day >= 21) || (month === 1 && day <= 19)) {
        return "Aquarius";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 20)) {
        return "Pisces";
    } else if ((month === 2 && day >= 21) || (month === 3 && day <= 20)) {
        return "Aries";
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 21)) {
        return "Taurus";
    } else if ((month === 4 && day >= 22) || (month === 5 && day <= 21)) {
        return "Gemini";
    } else if ((month === 5 && day >= 22) || (month === 6 && day <= 22)) {
        return "Cancer";
    } else if ((month === 6 && day >= 23) || (month === 7 && day <= 23)) {
        return "Leo";
    } else if ((month === 7 && day >= 24) || (month === 8 && day <= 23)) {
        return "Virgo";
    } else if ((month === 8 && day >= 24) || (month === 9 && day <= 23)) {
        return "Libra";
    } else if ((month === 9 && day >= 24) || (month === 10 && day <= 22)) {
        return "Scorpio";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "Sagittarius";
    } else {
        return "Capricorn";
    }
};
