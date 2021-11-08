/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    //find the 0 first and set the first pointer there
    // let start = 0;
    // let move = 0;
    let hash = {};
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] === 0) {
//             start = i;
//             break;
//         }
//     }
    
//     while(move < nums.length) { 
//         if(nums[move] > nums[start]) {
//             let temp = nums[start];
//             nums[start] = nums[move];
//             nums[move] = temp;
//             start = move;
//             move++;
//         }
//     }
    
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] === undefined) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }
    
    //console.log(hash);
    
    // for(let i = 0; i < nums.length; i++) {
    //     for(let j = 0; j <= hash[nums[i]]; j++) {
    //         nums[i] = nums[i];
    //     }
    // }
    let index = 0;
    for(keys in hash) {
        for(let i = 0; i < hash[keys]; i++) {
            nums[index] = keys;
            index++
        }
    }
};