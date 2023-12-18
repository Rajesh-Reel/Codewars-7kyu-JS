/*

7 kyu 

Sum of Odd Cubed Numbers

Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

*/

function cubeOdd(arr) {
    let cubedNumbers = arr.map((i) => Math.pow(i, 3));
    let oddNumbers = [];
    if (arr.filter((x) => typeof(x) == "number").length == arr.length) {
      for (let i = 0; i < cubedNumbers.length; i++) {
        if (cubedNumbers[i] % 2 !== 0) {
          oddNumbers.push(cubedNumbers[i]);
        }
      }
      return oddNumbers.reduce((a,b) => a+b, 0);
      
    } else {
      return undefined;
    }
}