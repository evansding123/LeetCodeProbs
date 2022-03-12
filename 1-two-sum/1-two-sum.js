/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for(var i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    for(var j = 0; j < nums.length; j++) {
        var complement = target - nums[j];
        if(map[complement] && map[complement] !== j) {
            return [j, map[complement]];
        }
    }
};