/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let onVal = 0;
    let notVal = 0;
    let count = 0;
    
    
    while(notVal < nums.length) {
        if(nums[notVal] !== val) {
            let temp = nums[notVal];
            nums[notVal] = nums[onVal];
            nums[onVal] = temp;
        }
        
        if(nums[onVal] !== val) {
            onVal++;
        } else {
            count++
        }
        
        notVal++;
    }
    nums.splice(nums.length - count, count);
    //console.log(count)
};