/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    //iterate though the matrix
    let pacific = false;
    let atlantic = false;
    
    let result = {};
    
    let current;
    
    let reachable = {};
    
    
    
    const dfs = (heights, r, c, current = []) => {
        if(heights[r] === undefined || heights[r][c] === undefined) {
            return;
        }
        if(reachable[`${r},${c}`] === true || result[current]) {
            return;
        }
        
        
        
        if(r === 0 || c === 0) {
                pacific = true;
            } 
            
        if(r === heights.length - 1 || c === heights[0].length - 1) {
                atlantic = true;
            } 
        
       
        
        if(pacific && atlantic) {
            //console.log(result, reachable);
            result[current] = current;
            current = [];
            pacific = false;
            atlantic = false;
            reachable = {};
            return;
        }
        
       
        
        
        if(heights[r + 1] !== undefined && heights[r][c] >= heights[r + 1][c]) {
            console.log('hit here', current, heights[r][c], r, c)
            reachable[`${r},${c}`] = true;
            dfs(heights, r + 1, c, current);
        
        }
        
        if(heights[r] !== undefined && heights[r][c] >= heights[r][c + 1]) {
           reachable[`${r},${c}`] = true;
            dfs(heights, r, c + 1, current);
        } 
        
        if(heights[r - 1] !== undefined && heights[r][c] >= heights[r - 1][c]) {
          reachable[`${r},${c}`] = true;
            dfs(heights, r - 1, c, current);
        } 
        
        if(heights[r][c] >= heights[r][c - 1]) {

            reachable[`${r},${c}`] = true;
            dfs(heights, r, c - 1, current);
           
        } 
        
        
        
//         if(current[0] === 1 && current[1] === 4) {
            
//             console.log(r, c, pacific, atlantic, current, heights[r][c], heights[r][c - 1]);
//         }
        
        //reachable = {};
        
        return;
        
        
    }
    
    for(let row = 0; row < heights.length; row++) {
        for(let col = 0; col < heights[row].length; col++) {
            reachable = {};
            current = [row, col];
            pacific = false;
            atlantic = false;
            dfs(heights, row, col, current);
        }
    }
    let resultArray = [];
    for(keys in result) {
        resultArray.push(result[keys]);
    }
    
    return resultArray;
    
    
    
    
    
};