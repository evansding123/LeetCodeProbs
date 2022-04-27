/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function(n, preferences, pairs) {
    //have to check every single pair
    
    let col = new Array(n);
    const hash = {};
    const hash2 = {};
    let count = 0;
    
    for(let i = 0; i < col.length; i++) {
        let row = new Array(n);
        
        for(let j = 0; j < row.length; j++) {
            if(i === j) {
                row[j] = null;
                continue;
            }
            
            row[j] = preferences[i].indexOf(j)
            col[i] = row;
        }
    }
    
    for(let pairing of pairs) {
        hash[pairing[0]] = pairing[1];
    }
    
    
    for(let pairing of pairs) {
        let sadness1 = col[pairing[0]][pairing[1]];
        let sadness2 = col[pairing[1]][pairing[0]];
//         let sad1 = false;
//         let sad2 = false
//         for(let i = 0; i < col[pairing[0]].length; i++) {
//             let rating = col[pairing[0]][i]
//             if(rating > sadness1 && col[i][pairing[0]] > col[i][hash[i]]) {
//                 sad1 = true;
//             }
//         }
        
//         if(sad1 && sad2) {
//             count+= 2;
//         }
        
        
        hash[pairing[0]] = sadness1;
        hash[pairing[1]] = sadness2;
    }
    
    // console.log(col);
    // console.log(hash)
   
    for(let keys in hash) {
        for(let i = 0; i < col[keys].length; i++) {
            let ratings = col[keys][i];
            
            if(hash2[keys] === undefined && ratings !== null && ratings < hash[keys] && col[i][keys]< hash[i]) {
                console.log(keys,ratings, hash[keys], col[i][keys], hash[i])
                count+= 1
                hash2[keys] = true;
            }
        }
    }
    
    return count;
    
    //if theres a combination that is greater for x and that combination you have with x is also greater than what it currently has, you have 2 unhappy friends
    
    
    
    
    
    
};