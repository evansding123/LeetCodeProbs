/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        let diff = nums[i];
        if(hash[diff] === undefined) {
            hash[target - diff] = i;
            
        } else {
            result.push(i, hash[diff])
            
            return result;
        }
        
        
    }
    
   return result
};