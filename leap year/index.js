
function leapYear(year){
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? true : false
};

const LeapYear = leapYear(2005);
console.log(LeapYear)