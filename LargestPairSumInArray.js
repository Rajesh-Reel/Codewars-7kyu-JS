/*

7 kyu 

Largest pair sum in array

Given a sequence of numbers, find the largest pair sum in the sequence.

For example
[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.

*/

function largestPairSum (numbers) {
    let firstMax = Math.max(...numbers);
    let secNum = numbers.splice(numbers.indexOf(firstMax), 1);
    let secMax = Math.max(...numbers);
    
    return firstMax + secMax;
}