/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const hash = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5, 
        'IV': 4,
        'I': 1
    }
    
    let result = '';
    
    
    //if the number is 4 or 9, need to return a smaller value on the left
    
    //divide number by 1000, put M by that number of times
   for(let keys in hash) {
       if(num < 0) {
           return result;
       }
       
       while(hash[keys] <= num) {
           num -= hash[keys];
           result += keys;
       }
   }
    
    return result;
};