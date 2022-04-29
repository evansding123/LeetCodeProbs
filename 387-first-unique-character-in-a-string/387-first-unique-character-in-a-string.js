/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hash = {};
    
    for(let i = 0; i < s.length; i++) {
        if(hash[s[i]] === undefined) {
            hash[s[i]] = [i, 1];
        } else {
            hash[s[i]][1]++;
        }
    }
    
    //console.log(hash)
    
    for(let keys in hash) {
        if(hash[keys][1] === 1) {
            return hash[keys][0];
        }
    }
 
    
    return -1;
};