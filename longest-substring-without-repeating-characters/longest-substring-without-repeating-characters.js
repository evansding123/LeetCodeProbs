/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let chars = {};
    
    
    let left = 0;
    let right = 0;
    
    let res = 0;
    
    while(right < s.length) {
        let r = s[right];
        if(chars[r] === undefined) {
            chars[r] = 0;
        }
        chars[r]++;
        
        while(chars[r] > 1) {
            let l = s[left];
            chars[l]--;
            left++
        }
        
        res = Math.max(res, right - left + 1);
        right++;
        
        
    }
    
    return res;
};