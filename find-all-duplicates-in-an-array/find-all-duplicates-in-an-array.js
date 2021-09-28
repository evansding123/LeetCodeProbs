/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    
    //not constant extra space
    
    let hash = {};
    let result = [];
    
    for(let i = 0; i < nums.length; i++) {
        
        if(hash[nums[i]] === undefined) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
       
        
    }
    
    let iterate = Object.keys(hash);
    // console.log(hash);
    // console.log(iterate);
    
    for(keys in hash) {
        if(hash[keys] === 2) {
            result.push(keys);
        }
    }
    // for(let i = 1; i <= iterate.length + 1; i++) {
    //     if(hash[i] === 2) {
    //         result.push(i);
    //     }
    // }
    
    return result;
    
    
};