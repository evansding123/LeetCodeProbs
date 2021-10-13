/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right =nums.length - 1;
    let mid = Math.floor((left + right) / 2);
    
if(nums.length === 1 && nums[0] !== target) {
    return -1;
}
    
const binarySearch = (l, r) => {
    
    while(l <= r) {
        let mid = Math.floor((l + r) / 2);
        // console.log(mid);
        // console.log(nums[mid])
        if(nums[mid] === target) {
            return mid;
        }
        if(nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1;
}
    
    
    
const findIndex = (l, r) => {
    
    let mid = Math.floor((l + r) / 2)
    
    if(nums[l] < nums[r]) {
        return 0;
    }
    
     while(r >= l) {
        if(nums[mid + 1] < nums[mid]) {
            return mid + 1;
        } else if(nums[mid - 1] > nums[mid]) {
            return mid;
        }
        
        if(nums[mid] > nums[0]) {
            mid++;
        } else {
            mid--;
        } 
    
    }
    
}
if(nums[0] === target) {
    return 0;
}
let index = findIndex(left, right);
// console.log('this is index', index);
// console.log(binarySearch(0,index))
    

    

    
if(index === 0) {
    return binarySearch(0, nums.length - 1);
}
    
if(nums[0] > target) {
   return binarySearch(index, nums.length - 1)
} else {
    return binarySearch(0, index);
    
}
    
    

    


   
};