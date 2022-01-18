/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   
    let left = 0;
    let right = 0;
    
    let window = new Set();
    let max = window.size;
    
    if(s.length === 0) {
        return 0;
    }
    
    while(right < s.length) {
        //have to have two conditionals for when left and right pointers move
        //console.log(window)
        while(window.has(s[right])) {
            window.delete(s[left]);
            left++;
        } 
        
        window.add(s[right]);
        
        if(window.size > max) {
            max = window.size;
        }
        
        right++;
        
    }
    
    //console.log(window)
    return max;
    
    
};