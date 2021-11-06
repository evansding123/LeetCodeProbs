/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    let hash = {};
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] === undefined) {
            hash[nums[i]] = [i];
        } else {
            hash[nums[i]].push(i)
        }
    }
    
    //console.log(hash);
   
    for(keys in hash) {
        if(hash[keys].length >= 2) {
            for(let i = 0; i < hash[keys].length; i++) {
                // console.log(hash[keys][i + 1] - hash[keys][i])
                if(hash[keys][i + 1] - hash[keys][i] <= k) {
                    return true;
                }
            }
    
        }
    }
    
    return false;
};