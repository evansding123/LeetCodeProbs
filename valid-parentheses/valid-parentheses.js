/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // let hash = {
    //     {: },
    //     (: ),
    //     [: ]
    // }
    
//     let hash = {};

//     for(let i = 0; i < s.length; i++) {
        
        
//         if(s[i] === '{') {
//             hash['}'] = '}';
//             continue;
//         }
        
//         if(s[i] === '(') {
//             hash[')'] = ')';
//             continue;
//         }
        
//         if(s[i] === '[') {
//             hash[']'] = ']';
//             continue;
//         }
        
//         if(hash[s[i]] !== undefined && i === s.length - 1) {
//             return true;
//         }
        
//         if(hash[s[i]] === undefined) {
//             return false;
//         }
    
    if (s === null || s.length <= 0) return true;
    var cArr = s.split('');
    var stack = [];
    for (var c of cArr) {
        if (c === '[') stack.push(']');
        else if (c === '{') stack.push('}');
        else if (c === '(') stack.push(')');
        else if (stack.length === 0 || c !== stack.pop()) return false;
    }
    if (stack.length === 0) return true;
    return false;
        
        
        
        
        
    
};