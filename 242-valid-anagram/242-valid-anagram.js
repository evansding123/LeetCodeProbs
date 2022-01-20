/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let hash = {};
    for(let i = 0; i < s.length; i++) {
        if(hash[s[i]] !== undefined) {
            hash[s[i]]++;
        } else {
            hash[s[i]] = 1;
        }
    }
    
    for(let i = 0; i < t.length; i++) {
       if(hash[t[i]] === undefined || hash[t[i]] < 0) {
           return false;
        } else {
            hash[t[i]]--;
        }
    }
    
    for(keys in hash) {
        if(hash[keys] !== 0) {
            return false;
        }
    }
    
    //console.log(hash)
    
    return true;
    
    
    
};