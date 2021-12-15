/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let s = x.toString();
    let result = '';
    
    if(x < 0) {
        result += '-';
        let word = s.split('');
        word.shift();
        s = word.join('');
    }
    for(let i = s.length - 1; i >= 0; i--) {
        result += s[i];
    }
    
    if((Number(result) <= 2**31 && Number(result) >= -1 * 2**31) ) {
        return result;
    } else {
        return 0;
    }
    
    //console.log(result);
    return result;
};