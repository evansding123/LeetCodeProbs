/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
if(x < Math.pow(-2, 31) || x > Math.pow(2, 31) ) {
    return 0;
}
     console.log(Math.pow(-2, 31));
   
    var string = x.toString();
    if(x === 0) {
        return 0;
    }
    
     if(x < 0) {
        string = string.substring(1);
     }
    
    // if(string.length >= 10) {
    //     return 0;
    // }
    var result = '';
    // if(string[string.length -1] === 0) {
    //     string
    // }
    for(var i = string.length - 1; i >=0; i--) {
       result += string[i];
    }
    
    
    
    if(x < 0) {
        var answer = Number(result) * -1;
        if(answer < Math.pow(-2, 31)) {
            return 0;
        } else {
            return answer;
        }
    }    
    
    if(Number(result) > Math.pow(2, 31)){
        return 0;
    } else {
        return Number(result);
    }
    
    
    
};