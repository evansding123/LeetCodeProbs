/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
//     let start = 0;
//     let end = nums.length - 1;
//     let count = 0;
    
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] === 0) {
//             count++
//         }
//     }
//     while(start < end) {
//         if(nums[start] === 0) {
//             let temp = nums[start + 1];
//             nums[start] = temp;
//             nums[start + 1] = 0;
//         }
        
//         start++;
//     }
    
    
    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] === 0) {
            nums.push(0);
            nums.splice(i, 1)
        }
    }
    
    
    
    
    
    
};