/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    let hash = {};
    let result = [];
    for(let i = 0; i < paths.length; i++) {
        let parts = paths[i].split(' ');
        //console.log(parts)
        let root = parts[0] 
        for(let j = 1; j< parts.length; j++) {
            let data = parts[j].split('(');
            let content = data[1].split('');
            content.pop();
            content = content.join('');
            if(parts[j] !== undefined && hash[content] === undefined) {
               hash[content] = [root + '/' + data[0]];
                //add whats behind the paren here
            } else {
                hash[content].push(root + '/' + data[0])
            }
        }
        
        
        
    }
    
//     let count = 0;
//     let limit = Object.keys(hash).length;
    
//     for(let keys in hash) {
//        if(hash[keys].length === 1) {
//            count++
//        } 
//     }
    
//     if(count === limit) {
//         return [];
//     }
    
    for(let keys in hash) {
        if(hash[keys].length > 1) {
            result.push(hash[keys]);
        }
        
    }
    
    
    
    return result;
};