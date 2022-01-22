/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const recurse = (s) => {
        
        if(s <= 1) {
            return s;
        } 
        
    
        
        return recurse(s - 1) + recurse(s - 2);
    }
    
    
    return recurse(n);
};