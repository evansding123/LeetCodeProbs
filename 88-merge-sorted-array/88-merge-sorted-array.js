/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let j = 0;
//     if(m === 0) {
//         j = n - 1;
//     } else {
//         j = n - m; 
//     }
    
    //the starting point must be when the zeroes start for the first array
    //second array starting point must be 
    
    for(let i = m; i < nums1.length; i++) {
        if(nums2[j] !== undefined) {
            nums1[i] = nums2[j];
            j++;
        }
       
    }

    return nums1.sort((a, b) =>  a - b);
};