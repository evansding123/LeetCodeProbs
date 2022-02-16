/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    //each time we go through array, take the difference between the current index number and 0
    //has to be n2 at least, 
    
    let resultHash = {}
    let result = [];
    nums = nums.sort((a, b) => a - b)
    // for(let i = nums.length; i > 0; i--) {
    //     if(nums[i] === nums[i - 1]) {
    //         nums.splice(i, 1);
    //     }
    // }

   //console.log(nums)
    for(let i = 0; i < nums.length && nums[i] <= 0; i++) {
        let hash = {};
        let target = 0 - nums[i]
       
        //need something to equal target when looking for 2nd and 3rd number
        if(i ==0 || nums[i - 1] != nums[i]) {
            for(let j = i + 1; j < nums.length; j++) {
                let curr = nums[j];
                if(hash[curr] === undefined && i !== j) {
                    hash[target - curr] = j
                } else if(i !== j) {
                    result.push([nums[i], nums[j], nums[hash[curr]]])
                    console.log(i, j)
                    while(j + 1 < nums.length && nums[j] === nums[j + 1]) {
                        j++
                        //console.log(nums[j])
                       
                    }
                     hash[nums[j]] = j

                }
            }
        }
        
    }
    
    return result
};