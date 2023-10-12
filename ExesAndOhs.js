/*

7 kyu 

Exes and Ohs 

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(str) {
    let Xs = 0, Os = 0, stri = str.toLowerCase();
    for (let i = 0; i < stri.length; i++) {
      if (stri[i] == "x") Xs++;
      if (stri[i] == "o") Os++;
    }
    return Xs == Os ? true : false;
}