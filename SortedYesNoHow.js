/*

7 kyu 

Sorted?yes?no?how?

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.

*/

function isSortedAndHow(array) {
    let asc = array.slice().sort((a, b) => a - b);
    let desc = array.slice().sort((a, b) => b - a);
    if (array.toString() == asc.toString()) return 'yes, ascending';
    if (array.toString() == desc.toString()) return 'yes, descending';
    return 'no';
}