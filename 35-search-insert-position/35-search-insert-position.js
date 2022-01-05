/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    ///just binarysearch
    
    
    let left = 0;
    let right = nums.length - 1;
    let insert = 0;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        
       
        if(nums[mid] === target) {
            return mid;
        }
        
        if(target < nums[mid]) {
            right = mid - 1;
           
        } else {
            left = mid + 1;
            
        }
        
        
       
    }
    
    return left;
};