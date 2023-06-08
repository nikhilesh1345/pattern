// 53. Maximum Subarray
// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

// Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:

Input: nums = [1]
Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.


var maxSubArray = function(nums) {
    let max= nums[0]
    let sum= nums[0]
    for(let i=1;i<nums.length;i+=1){
        if(sum+nums[i]>nums[i]){
            sum+=nums[i]
        }else{
            sum=nums[i]
        }
        max=Math.max(max,sum)
    }
    return max
};
// nums[i] 1 -3  4 -1 2 1 -5 4
// sum  -2 1 -2  4  3 5 6  1 5
// max  -2 1 1  4  4 5 6  6 6

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }
  console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95))

//   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  var findMaxAverage = function(nums, k) {
    let max =-Infinity
  let soFar =0;
  let Start=0;
  for(let End=0;End<nums.length;End++){
         soFar += nums[End]
      
      if(End-Start===k-1){
          let avg= soFar/k;
          max= Math.max(max,avg);
          
          soFar-= nums[Start];
               Start++
      }
  }
  return max;
};
console.log(findMaxAverage([1,4,16,22,5,7,8,9,10],3))

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null
function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}
