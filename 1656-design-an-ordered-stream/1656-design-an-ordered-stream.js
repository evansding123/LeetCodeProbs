/**
 * @param {number} n
 */
var OrderedStream = function(n) {
   this.stream = new Array(n)
   this.pointer = 0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    const result = [];
    this.stream[idKey - 1] = value
   if(this.pointer === idKey - 1) {
       while(this.stream[this.pointer]) {
           result.push(this.stream[this.pointer]);
           this.pointer++
       }
       
       return result;
   } else {
       return [];
   }
    
    
    
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */