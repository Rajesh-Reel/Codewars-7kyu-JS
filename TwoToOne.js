/*

7 kyu 

Two to One 

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

function longest(s1, s2) {
    let str1 = s1.split("").sort().join("");
    let str2 = s2.split("").sort().join("");
    
    let combined = str1 + str2;
    let sorted = [... new Set(combined)];
    
    let result = sorted.sort().join("");
    return result;
}