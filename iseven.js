// check the number is even or odd
function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
const putNumber = isEven(441);
console.log(putNumber);