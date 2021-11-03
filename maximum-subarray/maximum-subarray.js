/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
   
   
//     let window = 0;
//     let max = -999;
//     let i = 0;
//     let j = 0;
    
//     while(i <= nums.length) {
        
//         if(window > max) {
//             max = window;
//         } 
        
//         window+= nums[i]
//         i++;
        
//         if(window < max){
//             window -= nums[j];
//             j++;
//         } 
        
       
        
        
       
//     }
    
//     return max;
    
    let current = nums[0];
    let max = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        let num = nums[i];
        
        current = Math.max(num, current + num);
        max = Math.max(max, current);
    }
    
    return max;
    

};