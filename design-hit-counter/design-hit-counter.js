
var HitCounter = function() {
    this.hits = [];
   
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    
    
   
    if(this.hits[timestamp] === undefined) {
         this.hits[timestamp] = 1;
    } else {
        this.hits[timestamp]++;
    }
   
    
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    let number = 0;
   
    if(timestamp <= 300) {
        i = 0;
    } else {
        i = timestamp - 300;
    }
    
    i = i + 1;
    
    for(i; i <= timestamp; i++) {
        if(typeof this.hits[i] === 'number') {
            number += this.hits[i];
        }
    }
    return number;
}
/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */