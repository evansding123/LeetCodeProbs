/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x <0) {
        return false;
    }
    var string = x.toString().split("");
    console.log('start: ', string.join(''), 'end', string.reverse().join(''));
    if(string.join('') === string.reverse().join('')) {
        return true;
    } else {
        return false;
    }
};