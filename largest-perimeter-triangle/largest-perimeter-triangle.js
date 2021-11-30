/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums = nums.sort((a, b) => a - b);
    //console.log(nums);
    // let window = nums[0] + nums[1] + nums[2];
    // if(nums[0]^2 + nums[1]^2 + nums)
    let max = 0;
    for(let i = 0; i < nums.length - 2; i++) {
        let sum = nums[i] + nums[i + 1] + nums[i + 2];
        //console.log(nums[i] + nums[i + 1],nums[i + 2] );
        if(nums[i] + nums[i + 1] > nums[i + 2] && sum > max) {
            //console.log(nums[i] + nums[i + 1],nums[i + 2] );
            max = sum;
        }
    }
    
    return max;
    //return nums.reduce((prev, curr) => prev + curr);
    
};