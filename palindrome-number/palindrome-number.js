/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let backward = x.toString().split('').reverse().join('');
    if (x.toString() === backward) {
        return true;
    }
    
    return false;
};