/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    //shift front of s to back for the entire string and check each time
    let letters = s.split('');
    
    for(let i = 0; i < letters.length; i++) {
        let first = letters.shift();
        letters.push(first);
        if(letters.join('') === goal) {
            return true;
        }
    }
    
    return false;
    
    
};