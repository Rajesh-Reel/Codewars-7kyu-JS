/*

7 kyu 

Sort Numbers

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:
solution([1, 2, 10, 50, 5]);    // should return [1,2,5,10,50]
solution(null);                 // should return []

*/

function solution(nums){
    //   console.log("nums:", nums);
    //   let sorted = nums.sort(function(a, b) {return a-b;});
    //   console.log("sorted:", sorted);
      
      if (nums == null) {
        return [];
      } else {
        return nums.sort(function(a, b) {return a-b;});
      };
}