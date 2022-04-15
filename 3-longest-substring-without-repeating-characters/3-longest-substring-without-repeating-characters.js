/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //probably have to create a hash table to keep track of unique letters 
    //have a sliding window with two pointers 
    
    let first = 0;
    let last = 1;
    let hash = {};
    let longest = 0;
    
    //if hash of letter already exists, 
    hash[s[first]] = 1;
    
    if(s.length === 1) {
        return 1;
    }
    
    while(last < s.length) {
        
        if(hash[s[last]] === undefined) {
            hash[s[last]] = 1;
            
        } else if(hash[s[last]] !== undefined) {
            hash[s[last]]++;
        }
        
        while(hash[s[last]] > 1) {
            hash[s[first]]--;
            first++;
        }
        
        let subLength = last - first + 1;
        
        longest = Math.max(longest, subLength);
        last++;
    }
    
    return longest;
};