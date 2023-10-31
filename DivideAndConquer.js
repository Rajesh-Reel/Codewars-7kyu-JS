/*

7 kyu 

Divide and Conquer

Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.

*/

function divCon(x) {
    let numberSum = 0;
    let nonNumber = 0;
    
    for (let i = 0; i < x.length; i++) {
      if (typeof x[i] == "number"){
        numberSum += x[i];
      } else {
        nonNumber += +x[i];
      }
    }
    
    return numberSum - nonNumber;
}