/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let hash = {};
    //store the current longest string
    let left = 0;
    let right = 0;
    let max = 0;
    let res = 0;
    
    while(right < s.length) {
        if(hash[s[right]] === undefined) {
            hash[s[right]] =  1;
        } else {
            hash[s[right]]++;
        }
        
        for(keys in hash) {
            if(hash[keys] > max) {
                max = hash[keys];
            }
        }
        
        while(right - left + 1 - max > k) {
            hash[s[left]]--;
            left++;
            
        } 
            right++;
        
 
        //res = Math.max(res, right - left + 1)
        
        
       
    } 
    console.log(right, left, hash)
    return right - left;
};