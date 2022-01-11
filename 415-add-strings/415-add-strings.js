/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let length1 = num1.length - 1;
    let length2 = num2.length - 1;
    num1 = num1.split('');
    num2 = num2.split('');
    
    let carry = 0;
    let result = [];
   
    
    
    while(length1 >=0 || length2 >=0) {
        let first = 0;
        let second = 0;
        if(num1[length1] !== undefined) {
            first = num1[length1] - 0;
        }
        
        if(num2[length2] !== undefined) {
            second = num2[length2] - 0;
        }
        let sum = first + second + carry;
        //console.log(first, second, sum, carry);
        if(sum >= 10) {
            carry = Math.floor(sum / 10);
            sum = sum % 10;
        } else {
            carry = 0;
        }
        result.unshift(sum);
        
        length1--;
        length2--;
    }
    
    if(carry > 0) {
        result.unshift(carry);
    }
    
    return result.join('');
};