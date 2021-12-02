/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    let hash = {0: 1};
    
    for(let i = 0; i < nums.length; i++) {
        sum+= nums[i];
        if(hash[sum - k] !== undefined) {
            //hash[sum - k]++;
            //hash[sum]++;
            count+= hash[sum - k];
        } 
        
        if(hash[sum] === undefined) {
            hash[sum] = 1;
        } else {
            hash[sum]++;
        }
        
    }
    
    return count;
};