/*

7 kyu 

String ends with?

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/

function solution(str, ending){
    const X = str.slice(-ending.length);
    if(X === ending || ending === ""){
       return true
    } else {return false};
};