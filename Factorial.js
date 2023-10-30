/*

7 kyu 

Factorial 

Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial

*/

function factorial(n) {
    if (n > 1) {
      return n * factorial(n - 1);
    } else {
      return 1;
    }
}