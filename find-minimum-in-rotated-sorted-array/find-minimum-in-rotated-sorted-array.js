/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(arr) {
//     //binary search
    
    if(arr.length <= 1) {
        return arr[0];
    }
    
//     let right = nums.length - 1;
//     let left = 0;
//     let mid = Math.min(right + left / 2);
    
//     if(nums[right] > nums[0]) {
//         return nums[0];
//     }
    
//     while(right >= left) {
        
//         if(nums[mid + 1] < nums[mid]) {
//             return nums[mid + 1];
//         }
        
//         if(nums[mid - 1] > nums[mid]) {
//             return nums[mid];
//         }
        
//         if(nums[mid] > nums[0]) {
//             mid++;
//         } else {
//             mid--;
//         }
        
        
//     }
    
    let left = 0;
    let right = arr.length - 1;
    
    if(arr.length === 1) {
        return arr[0];
    }
    
    while(left <= right) {
        let mid = left + Math.trunc(right - left / 2);
        if(arr[mid] < arr[mid - 1]) {
            return arr[mid];
        } else if (arr[mid] > arr[mid + 1]) {
            return arr[mid + 1];
        } else if(arr[mid]< arr[0]){
            right = mid - 1;
        } else if(arr[mid] > arr[0]){
            left = mid + 1;
        }
        
        //console.log(left, right)
        
        
    }
    return arr[0];
        
   
    
   
};