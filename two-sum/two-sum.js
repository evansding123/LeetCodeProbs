/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let hash = {};
    let result = [];
    
  
    
    for(let i = 0; i < nums.length; i++) {
        if(hash[target - nums[i]] !== undefined) {
            return [i, hash[target - nums[i]]];
        } else {
            hash[nums[i]] = i;
        }
    }
    
    return result;
    
    
};