/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    //if index is odd, its greater, if its even, its less
    
    //need to check if its consecutive
    const checker = (array) => {
        let count = 0;
        let indexer = [-1];
        
        if(array.length <= 1) {
            return 1;
        }
        for(var i = 0; i < array.length; i++) {
            if(i % 2 === 0 && array[i] < array[i + 1]) {
                count++;
            } else if(i % 2 === 1 && array[i] > array[i + 1]) {
                count++;
            } else {
                indexer.push(i);
            }
        }
        console.log(indexer);
        let max = 0
        for(var j = 0; j < indexer.length; j++) {
            if((indexer[j + 1] - indexer[j]) > max) {
                max = indexer[j + 1] - indexer[j]
            }
        }
        return max;
    }
    
    //console.log('normal', checker(arr), 'reverse', checker(arr.reverse()));
    
    
    let reverseArray = arr.map((item) => {
        return item;
    })
    
    reverseArray.reverse();
    
    let answer = checker(arr) >  checker(reverseArray) ? checker(arr) : checker(reverseArray);
   
    
    
    return answer;

   
    
    
    
    //returns the length of the greatest number of consecutive checkers

};