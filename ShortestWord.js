/*

7 kyu 

Shortest Word 

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

function findShort(s){
    let order = s.split(" ").sort((a,b) => a.length - b.length); //converts to array, then sorts short to longest
    return order[0].length; //zero index is the shortest length word
}