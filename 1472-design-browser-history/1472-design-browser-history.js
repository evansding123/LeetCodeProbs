/**
 * @param {string} homepage
 */

class Node {
        constructor(string, node1 = 0, node2 = 0) {
            this.next = node1;
            this.prev = node2;
            this.val = string;
        }
    }


var BrowserHistory = function(homepage) {
    
    this.history = new Node(homepage, null, null);
   

    
} 
/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    
    let entry = new Node(url, null, this.history);
    
    this.history.next = entry;
    this.history = this.history.next;
   
    
    
    
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    let num = 0
    while(this.history.prev !== null && num < steps) {
        
        this.history = this.history.prev
        num++;
    }
    
   
    
    return this.history.val;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    let num = 0
    while(this.history.next !== null && num < steps) {
        
        this.history = this.history.next
        num++;
    }
    
   
    
    return this.history.val;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */