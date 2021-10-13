/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    //binary search
    
    if(nums.length <= 1) {
        return nums[0];
    }
    
    let right = nums.length - 1;
    let left = 0;
    let mid = Math.min(right + left / 2);
    
    if(nums[right] > nums[0]) {
        return nums[0];
    }
    
    while(right >= left) {
        
        if(nums[mid + 1] < nums[mid]) {
            return nums[mid + 1];
        }
        
        if(nums[mid - 1] > nums[mid]) {
            return nums[mid];
        }
        
        if(nums[mid] > nums[0]) {
            mid++;
        } else {
            mid--;
        }
        
        
    }
        
   
    
   
};