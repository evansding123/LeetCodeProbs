/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let window = [];
    let array = [];
   
    s = s.split('');
   
    const checker = (string) => {
        let hash = {};
        for(let i = 0; i < string.length; i++) {
            if(hash[string[i]] === undefined) {
                hash[string[i]] = true
            } else {
                return false;
            }
        }
        return true;
    }
    
    for(let i = 0; i < s.length; i++) {
        window.push(s[i]);
       
        if(checker(window.join(''))) {
            array.push(window.join(''));
        } else {
            window.shift();
    
        }
    }
    
    
    
    let max = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i].length > max) {
            max = array[i].length;
        }
    }
    
    return max;
    
};