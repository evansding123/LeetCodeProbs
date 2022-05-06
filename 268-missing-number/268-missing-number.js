/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const hash = {};
    for(let i = 0; i < nums.length; i++) {
        hash[nums[i]] =  true;
    }
    
   
    
    for(let j = 0; j <= nums.length; j++) {
        if(hash[j] === undefined) {
            return j;
        }
    }
    
    return -1;
};