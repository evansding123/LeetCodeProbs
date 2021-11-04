/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let answer = '';
    
    for(let i = 0; i <= strs[0].length; i++) {
        let pref = strs[0].substring(0, i);
        //console.log(pref);
        for(let j = 0; j < strs.length; j++) {
            let prefInner = strs[j].substring(0, i);
            //console.log(prefInner, pref);
            if(prefInner !== pref) {
                return answer;
            }
            if (prefInner === pref && j === strs.length - 1) {
                answer = pref;
            } 
        }
    }
    
    return answer;
    
};