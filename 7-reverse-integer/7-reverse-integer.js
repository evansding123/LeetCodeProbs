/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let res = [];
    let neg = false
    if (x < 0) {
        neg = true;
        x = Math.abs(x)
    }
    while (x) {
        let digit = x % 10
        x -= digit
        x = x / 10
        res.push(digit)
        
    }
    if (res.join('') > 2 ** 31) return 0
    return neg ? Number(res.join('')) - Number(res.join('') * 2) : res.join('')
};