/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //have to determine if the intervals are overlapping
    //is the array sorted in any way? looks like its sorted from the value of the first and second tuple
    
    //can determine if they are overalapping  if the first index of the second tuple is greater than second index of the first
    
    
  
    let i = 0;
    
    intervals.sort((a, b) => {
        return ((a[0] - b[0]))
    })
    
    //console.log(intervals)
    
    while(i < intervals.length) {
        if(intervals[i + 1] !== undefined && intervals[i][1] >= intervals[i + 1][0]) {
            const firstNum = intervals[i + 1][0] < intervals[i][0] ? intervals[i + 1][0] : intervals[i][0];
            const secondNum = intervals[i + 1][1] > intervals[i][1] ? intervals[i + 1][1] : intervals[i][1];
            intervals.splice(i, 2, [firstNum, secondNum])
        } else {
            i++;
        }
    }
    
    return intervals;
};