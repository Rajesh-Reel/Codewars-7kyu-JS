/*

7 kyu 

Most digits

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

*/

function findLongest(array) {
    let sorted = array.sort((a, b) => String(b).length - String(a).length);
  //   console.log(sorted);
    return sorted[0];
}