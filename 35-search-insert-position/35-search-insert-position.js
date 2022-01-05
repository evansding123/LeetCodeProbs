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
        
        //console.log(left, right, mid)
        
        if(left <= right) {
            //console.log(left, right, mid)
            if(nums[left] > target) {
                insert = left;
            } else {
                insert = left + 1;    
            }
           
        }
        
       
        if(nums[mid] === target) {
            return mid;
        }
        
        if(target < nums[mid]) {
            right = mid - 1;
           
        } else {
            left = mid + 1;
            
        }
        
        
       
    }
    
    return insert;
};