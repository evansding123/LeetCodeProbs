/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    
    let start = 0;
    let result = 0;
    
    let t = arr.every((d)=> d == arr[0]);// if all the number are same return 1 
    if(t)return 1;
    
    
    if(arr.length == 1)return 1
    for(let i =1; i <arr.length; i++){
        //signs are not different so its not turbulent so adjust the window
        if(i == arr.length-1 || (arr[i] - arr[i-1]) * (arr[i+1]- arr[i]) >=0){
            result = Math.max(result, i - start+1);
            start =i 
        }
    }
    
    return result
};