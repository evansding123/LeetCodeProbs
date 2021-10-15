/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = [];
    let hash = {};
    
    for(let i = 0; i < strs.length; i++) {
        let word = strs[i].split('').sort().join('');
        if(hash[word] === undefined) {
            hash[word] = [strs[i]];
        } else {
            hash[word].push(strs[i]);
            
        }
    }
    
    
    for(let keys in hash) {
        result.push(hash[keys]);
    }
    
    return result;
};