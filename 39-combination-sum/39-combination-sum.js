/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
    let result = [];
    
    const dfs = (i, currentArray , total) => {
        if(total === target) {
            
            result.push([...currentArray])
            return;
        }
        
        if(i > candidates.length - 1|| total > target) {
            return;
        }
        
        currentArray.push(candidates[i]);
        
        dfs(i, currentArray, total + candidates[i]);
        currentArray.pop();
        dfs(i + 1, currentArray, total);
    }
    
    dfs(0, [], 0);
   
    return result;
};