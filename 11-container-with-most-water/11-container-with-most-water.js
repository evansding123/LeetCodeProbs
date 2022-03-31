/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let first = 0;
    
    let last = height.length - 1;
    
    let maxArea = 0;
    while(last > first) {
        let currHeight = Math.min(height[first], height[last]);
        let width = last - first;
        
        let area = currHeight * width;
        
        maxArea = Math.max(area, maxArea);
        
        
        
        if(height[last] >height[first]) {
            first++
        } else {
            last--
        }
        
       
        
        
    }
    
    return maxArea;
};