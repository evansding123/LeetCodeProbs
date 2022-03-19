/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let c = s.split('');
    if(s.length === 1) {
        return false
    }
    for(let i = 0; i < c.length; i++) {
        if(c[i] === '(' ) {
            stack.push(')')
        } else if(c[i] === '[') {
            stack.push(']')       
        } else if(c[i] === '{') {
            stack.push('}')       
        } else if(stack.length === 0 || c[i] !== stack.pop()) {
            return false;
        }
        
    }
    
    
    return stack.length === 0;
};