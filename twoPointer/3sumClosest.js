

// 16. 3Sum Closest
// Medium
// 8.5K
// 464
// Companies
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

 

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

function threeSumClosest(nums,target){
    nums=nums.sort((a,b)=>a-b);
 let ans=nums[0]+nums[1]+nums[2];

 for(let i=0;i<nums.length-2;i++){
   let start=i+1
   let end=nums.length-1;

   while(start<end) {

    const sum=nums[i]+nums[start]+nums[end];
    //    start++
    //    end--
    // while(start<end&&nums[start]===nums[start-1])start++
    // while(start<end&&nums[end]===nums[end+1])end--

    if(sum>target){
        end--
    }else{
        start++
    }
    if(Math.abs(target-sum)<Math.abs(target-ans)){
        ans=sum
    }
   }
 }
 return ans
}
console.log(threeSumClosest([-1,2,1,-4],1))