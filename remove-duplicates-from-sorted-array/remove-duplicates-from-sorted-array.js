/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let dup = 0;
    let uniq = 1;
    
    while(dup < nums.length) {
        if(nums[dup] === nums[dup + 1]) {
            uniq = dup;
            nums.splice(dup + 1, 1);
            dup = uniq;
        } else{
            dup++;
        }
        
        
        // console.log(dup);
        // console.log(nums);
        
        
    }
};