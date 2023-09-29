/*

7 kyu 

Anagram Detection 

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK"

*/

var isAnagram = function(test, original) {
    let sortedTest = [...test.toLowerCase()].sort().join();
    let sortedOriginal = [...original.toLowerCase()].sort().join();
  //   console.log("test:", sortedTest);
  //   console.log("original:", sortedOriginal);
    return sortedTest == sortedOriginal ? true : false;
};