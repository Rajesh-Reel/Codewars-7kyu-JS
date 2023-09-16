/*

7 kyu

Alternate capitalization

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

*/

function capitalize(s){
    let evens = "", odds = "";
    //evens index
    for (let i = 0; i < s.length; i++) {
      if (i % 2 == 0) {
        evens += s[i].toUpperCase();
      } else {
        evens += s[i];
      }
    }
    //odds index
    for (let i = 0; i < s.length; i++) {
      if (i % 2 == 1) {
        odds += s[i].toUpperCase();
      } else {
        odds += s[i];
      }
    }
    return [evens, odds];
};