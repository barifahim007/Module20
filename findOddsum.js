// calculate the sum of all number of an array
function getsumofAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index]
        sum = sum + element;
        console.log(sum)
    }
    return sum;

}
// const mynumbers = [23, 46, 76, 97, 35, 47, 89, 57, 49, 56, 768, 845,]
// getsumofAnArray(mynumbers)

// 20-6: get odd numbers of an array and get odd sum of an array
function getOddNumberOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {

            oddNumbers.push(element);
            console.log(index, element)

        }

    }
    return oddNumbers;
}
const mynumbers = [23, 46, 76, 97, 35, 47, 89, 57, 49, 56, 768, 845,]
const myOddNumbers = getOddNumberOfAnArray(mynumbers);
console.log(myOddNumbers);
const oddNumbersSum = getsumofAnArray(myOddNumbers);
console.log(oddNumbersSum);
