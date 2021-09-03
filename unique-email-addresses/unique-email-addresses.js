/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let count = 0;
    let mem = {};
    let string = '';
    for(var i = 0; i < emails.length; i++) {
        
        for(var j = 0; j < emails[i].length; j++) {
            
            
             if(emails[i][j] === '+') {
                let index = emails[i].search('@');
                let remove = emails[i].substring(j, index);
                emails[i] = emails[i].split(remove).join('');
                //console.log(emails[i])
            }
            
            if(emails[i][j] === '@') {
                
                let portion = emails[i].substring(0, j);
                let backPortion = emails[i].substring(j, emails[i].length);
                console.log(portion);
                string = portion.split('.').join('') + backPortion;
            }
            
            if (j === emails[i].length - 1) {
                //this could also be a hash table
                 mem[string] = string;
                 string = '';
            }
            
            
        }
    }
    
    for(var keys in mem) {
        count++;
    }
    console.log(mem);
    return count;
};