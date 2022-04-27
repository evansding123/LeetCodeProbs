/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    //wamt to separate entries by commas and compare them
    //can brute force by having two for loops, comparing every single entry to every single other one
    
//     for(let tuples of transactions) {
//         let array = tuples.split(',')
//         tuples = array;
//     }
    
    const result = [];
    const hash = {};
    
    for(let i = 0; i < transactions.length; i++) {
        transactions[i] = transactions[i].split(',');
    }
    
    for(let i = 0; i < transactions.length; i++) {
        if(transactions[i][2] > 1000 && hash[i] === undefined) {
            const key = transactions[i].join(',')
            result.push(key);
            hash[i] = true;
        }
        for(let j = 0; j < transactions.length; j++) {
            if(i === j) {
                continue;
            }
            
            if(hash[i] !== undefined) {
                continue;
            }
            
            let first = transactions[i];
            let second = transactions[j];
            //console.log(first[0] === second[0],Math.abs(first[1]) - Math.abs(second[1]), first[3] !== second[3], first[1])
            if(first[0] === second[0] && (Math.abs(first[1] - second[1]) <= 60) && first[3] !== second[3]) {
                
                result.push(transactions[i].join(','));
                
                hash[i] = true;
            }
            
        }
    }
    
   
    
    return result;
};