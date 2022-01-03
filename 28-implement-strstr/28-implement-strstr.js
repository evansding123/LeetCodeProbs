/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    //if the needle is x length, we need to search in windows of x
    //move the window checking each time. ON is h * n
    
    if(haystack.length === 0 && needle.length === 0) {
        return 0;
    } 
    
    if(haystack.length === 0 && needle.length > 0) {
        return -1;
    }
    
    for(let i = 0; i < haystack.length; i++) {
        let window = haystack.substring(i, i + needle.length);
        
        if(window === needle) {
            return i;
        }
    }
    
    return -1;
};