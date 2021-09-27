/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    
    
    let hash = {};
    for(let i = 0; i < emails.length; i++) {
        let validEmail = [];
        let domain = [];
        for(let j = 0; j < emails[i].length; j++) {
            if(emails[i][j] === '.') {
                continue;
            }
            
            if(emails[i][j] === '@' || emails[i][j] === '+') {
                break;
            }
            
            if(emails[i][j] !== '@') {
                validEmail.push(emails[i][j]);
            }
        }
        
        
        for(let j = emails[i].length - 1; j >=0; j--) {
            if(emails[i][j] === '@') {
                domain.push(emails[i][j]);
                break;
            }
            
            domain.push(emails[i][j]);
        }
        
        let address = validEmail.join('') + domain.reverse().join('');
        hash[address] = true;
        
        
    }
    // console.log(hash);
    return Object.keys(hash).length;
};