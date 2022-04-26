/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    s = s.split('');
    const stack = [];
    for(let i = 0; i < s.length; i++) {
       
        if(s[i - 1] !== undefined && s[i] === s[i - 1]) {
            stack[stack.length - 1]++;
            if(stack[stack.length -1] === k) {
                //console.log(stack, i)
                let index = i - stack[stack.length - 1] + 1;
                s.splice(index, stack.pop());
                i = index - 1;
                //console.log(i)
            }
        } else {
            stack.push(1);
        }
        
       
    }
    
    return s.join('');
};