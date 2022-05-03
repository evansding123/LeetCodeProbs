/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    //have a sum to keep track if we are right
    //while sum doesnt equal 1, keep on looping through number
    
    let sum = 0;
    let count = 0;
    
    let numArray = n.toString().split('');

    
    while(sum !== 1) {
        let insideSum = 0
        for(let i = 0; i < numArray.length; i++) {
            insideSum+= Math.pow(numArray[i], 2);
        }
        
        sum = insideSum;
        numArray = sum.toString().split('');
        count++;
        if(count > 100) {
            return false;
        }
    }
    
    return true;
};