/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //check other intervals with first number less than second number
    //brute force way is to just iterate through every single number  and match every number
    intervals = intervals.sort((a,b) => {return a[0] - b[0]})
    let result = [];
    let hash = {};
    
    for(let i = 0; i < intervals.length; i++) {
       if(result.length === 0 || result[result.length - 1][1] < intervals[i][0]) {
           result.push(intervals[i]);
       } else {
           result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1])
       }
    }
    
    
    return result
};