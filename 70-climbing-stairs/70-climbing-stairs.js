/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    let memo = {};
    const recurse = (i, length) => {
        
        
        if(memo[i] !== undefined) {
            return memo[i];
        }
        if(i > length) {
            return 0;
        }
        
        if(i === length) {
            return 1;
        }
        
        memo[i] = recurse(i + 1, length) + recurse(i + 2, length);
        return memo[i];
    }
    
    return recurse(0, n);
};