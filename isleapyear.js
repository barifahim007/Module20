// check the year is leap year
function isleapyear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return 'yes! \it\'s leap year';

    }
    else {
        return 'no \it\'s not leap year';
    }
}
const usernumber = isleapyear(3032);
console.log(usernumber);