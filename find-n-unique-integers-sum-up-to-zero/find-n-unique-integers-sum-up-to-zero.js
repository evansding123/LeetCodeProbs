/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    //the moment you find a unique sum to zero, return that portion of the array
    //probably sliding window
    
    let result = [];
    let hash = {};
    if(n % 2 === 1) {
        result.push(0);
        hash[0] = true;
    }
    
   //console.log(Math.floor(n / 2));
   for(let i = 1; i <= Math.floor(n / 2); i++) {
       let num = i;
       if(hash[num] === undefined) {
           hash[num] = true;
           result.push(num, -num);
       }
       
       if(result.length === n) {
          return result;
       }
   }
    console.log(result.length)
    return result;
};