/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //if we find the target - nums in the array, that means the two indices add up to target
    //can either be one pass or two pass
    //we need a frequency hash to store 
    let hash = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] === undefined) {
            hash[nums[i]] = i;
        }
        
        if(hash[target - nums[i]] !== undefined && hash[target - nums[i]] !== i) {
            return [hash[target - nums[i]], i];
        }
    }
    
    return [];
};