/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //iterate through the string with two pointers
    //add whatever the pointers are on to the has table
    
    let left = 0;
    
    let right = 1;
    
    let max = 1;
    
    const hash = {};
    
    hash[s[left]] = 1;
    
    if(s.length === 0) {
        return 0;
    }
    
    while(right < s.length) {
        if(hash[s[right]] === undefined) {
            hash[s[right]] = 1;
        } else {
            hash[s[right]]++;
        }
        
        while(hash[s[right]] > 1) {
            hash[s[left]]--;
            left++;
        }
        
        max = Math.max(max, right - left + 1);
        
        right++;
    }
    
    return max;
};