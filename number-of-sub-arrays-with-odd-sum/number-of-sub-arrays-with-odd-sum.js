/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    const MOD = 1e9 + 7;
    const n = arr.length;
    const count = [1, 0];
	
	let res = 0;
    let sum = 0;
    
    for (let i = 0; i < n; i++) {
        const num = arr[i];
        sum = (sum + num) % 2;
        
        if (sum === 1) res = (res + count[0]) % MOD;
        else res = (res + count[1]) % MOD;
        
        count[sum]++;
    }
    
    return res;
};