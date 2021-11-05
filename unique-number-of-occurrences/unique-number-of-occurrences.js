/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let hash = {};
    let hash2 = {};
    for(let i = 0; i < arr.length; i++) {
        if(hash[arr[i]] === undefined) {
            hash[arr[i]] = 1
        } else {
            hash[arr[i]]++;
        }
    }
    
    for(keys in hash) {
        if(hash2[hash[keys]] === undefined) {
           hash2[hash[keys]] = 1;
        } else {
            hash2[hash[keys]]++;
        }
    }
    
    for(keys in hash2) {
        if(hash2[keys] > 1) {
            return false;
        }
    }
    
    return true;
};