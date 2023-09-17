/*

7 kyu 

Find the stray number

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

function stray(numbers) {
    let stray = [], stray2 = [];
    let matches = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] != matches) {
        stray.push(numbers[i]);
      } else {
        stray2.push(numbers[i]);
      }
    }
    console.log("n:", numbers);
    console.log("stray:", stray);
    console.log("stray2:", stray2);
    return stray.length < stray2.length ? Number(stray) : Number(stray2);
}