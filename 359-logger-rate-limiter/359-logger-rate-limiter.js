
var Logger = function() {
    this.logger = {};
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if(this.logger[message] === undefined) {
        this.logger[message] = timestamp;
        return true;
    } else if(timestamp - this.logger[message] >= 10){
        this.logger[message]  = timestamp;
        return true;
    } else {
        return false;
    }

   //return true
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */