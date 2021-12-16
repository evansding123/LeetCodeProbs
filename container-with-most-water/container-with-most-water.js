/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //index is the width, number at index is the height
    
    //need to find the point where diff in index x min of height is the largest
    
    //keep track of max
    let max = 0;
    
    let first = 0;
    let second = height.length - 1;
    
    while(first < second) {
        let width = second - first;
        let length = Math.min(height[second], height[first]);
        let area = Math.abs(width * length)
        //console.log(first, second, area)
        if(area > max) {
            max = area;
        }
        
        if(height[first] < height[second]) {
            first++
        } else {
            second--;
        }
        
        
        
//         if(height[first + 1] > length) {
//             first++;
//             index++;
//             continue;
//         }
        
//         if(height[second - 1] > length) {
//             second--;
//             index++;
//             continue;
//         }
        
//         if(height[first + 1] <= length && height[second - 1] <= length) {
//             return max;
//         }
        
        
    }
    
    return max;
};