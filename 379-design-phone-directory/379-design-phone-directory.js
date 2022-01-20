/**
 * @param {number} maxNumbers
 */
var PhoneDirectory = function(maxNumbers) {
  this.taken = [];
  this.available = [...Array(maxNumbers).keys()];
};

/**
 * @return {number}
 */
PhoneDirectory.prototype.get = function() {
  const num = this.available.shift();
  if (num === undefined) return -1;
  this.taken.push(num);
  return num;
};

/** 
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function(number) {
  return this.available.includes(number);
};

/** 
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function(number) {
  const index = this.taken.findIndex(val => val === number);
  if (index < 0) return;
  this.taken.splice(index, 1);
  this.available.push(number);
};

/** 
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */