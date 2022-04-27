/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    //to check if t is an anagram of s, use a hash table
    
    // intitalize count variable, loop over t and hash table of s, if frequency is different, do something
    
    
    let count = 0;
    let allowed = 0;
    let hash = {};
    let hash2 = {};
    
    for(let letter of s) {
        if(hash[letter] === undefined) {
            hash[letter] = 1;
        } else {
            hash[letter]++;
        }
    }
    
    for(let letter of t) {
        if(hash2[letter] === undefined) {
            hash2[letter] = 1;
        } else {
            hash2[letter]++;
        }
    }
    
    //console.log(s, t,hash, hash2)
    
    for(let keys in hash2) {
        if(hash[keys] === undefined) {
            allowed+= hash2[keys]
        } else if(hash[keys] < hash2[keys]) {
            allowed+= hash2[keys] - hash[keys];
        } 
       
    }
    
    //console.log(allowed);
    
     // if(hash[keys] > hash2[keys]) {
        //     count += hash[keys] - hash2[keys];
        // } else {
        //     count++
        // }
    
    return allowed;
};