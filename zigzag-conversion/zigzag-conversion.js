/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function(s, numRows) {
    if (numRows === 1) return s
    let arr = new Array(numRows).fill('')
    let direction = false // control pointer increase or decrease
    let pointer = 0       // witch location you should save your char
        
    for (let i = 0; i < s.length; i++) {
        if(i % (numRows-1) === 0) direction = !direction
        arr[pointer] += s.charAt(i)
        direction ? pointer++ : pointer--
    }
    
    return arr.reduce((a, v) => a + v, '')
};
