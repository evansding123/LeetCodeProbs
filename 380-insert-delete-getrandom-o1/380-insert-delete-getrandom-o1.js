var RandomizedSet = function() {
    //this.length = 0;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this[val] === undefined) {
        this[val] = val;
        //this.length++;
        return true;
    } else {
        return false;
    }
    
    return false;
    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this[val] !== undefined) {
        delete this[val];
        //this.length--;
        return true;
    } else {
        //console.log(this)
        return false;
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let index = Object.keys(this);
    let num = Math.floor((Math.random() * index.length));
    //console.log(num);
    return index[num];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */