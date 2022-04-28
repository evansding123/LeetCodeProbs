
var Leaderboard = function() {
    this.board = [];
    this.players = {};
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    
    for(let i = 0; i < this.board.length; i++) {
        if(this.board[i][0] === playerId) {
            this.board[i][1] += score;
            return;
        }
    }
    
    
    this.board.push([playerId, score]);
   
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    this.board.sort((a,b) => {
        return b[1] - a[1];
    })
    
    let count = 0;
    
    for(let i = 0; i < K; i++) {
        
        count+= this.board[i][1];
    }
    
    return count;
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    for(let i = 0; i < this.board.length; i++) {
        if(this.board[i][0] === playerId) {
            this.board[i] = [0,0];
        }
    }
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */