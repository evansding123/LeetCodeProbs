/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //want the highest height (height[i]) and longest possible difference in i 
    //two pointers, find the min between them each time. multiply by difference in i and store it in hashmap
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    
    
    while(left < right) {
        let max = Math.min(height[left], height[right]);
        
        let length = Math.abs(right - left);
        
        let area = max * length;
        
        
        if(area > maxArea) {
            maxArea = area;
        }
        
        //console.log(height[right - 1], height[left + 1], right - left)
        
        if(height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }
    
    
    return maxArea;
};