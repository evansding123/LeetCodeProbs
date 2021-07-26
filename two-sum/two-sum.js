/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    for(var i = 0; i < nums.length; i++) {
        for(var j = 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target && i !== j) {
                result.push(i);
                result.push(j);
                return result;
                
            }
        }
    }
    return result;
};