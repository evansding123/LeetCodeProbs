/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let memo = {};
    const recurse = (i, n) => {
        if(i > n) {
            return 0;
        }
        if(i === n) {
            return 1;
        }
        
        if(memo[i] > 0) {
            return memo[i]
        }
        memo[i] = recurse(i + 1, n) + recurse(i + 2, n)
        return memo[i]
    }
    
    return recurse(0, n);
};