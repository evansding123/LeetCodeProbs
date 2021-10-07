/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let num = 0;
    
    if (grid == null || grid.length == 0) {
      return 0;
    }
    
    
    const dfs = (grid, r, c) => {
        let row = grid.length;
        let col = grid[0].length;
       
        if(r < 0 || c < 0 || r >= row || c >= col|| grid[r][c] === '0') {
            return;
        }
        
        
        grid[r][c] = '0';
        dfs(grid, r - 1, c);
        dfs(grid, r + 1, c);
        dfs(grid, r, c - 1);
        dfs(grid, r, c + 1);
    
        
    }
    
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === '1') {
                num++;
                dfs(grid, i, j);
            }
        }
    }
    
    return num;
    
};