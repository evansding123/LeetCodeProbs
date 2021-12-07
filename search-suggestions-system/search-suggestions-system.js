/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    //should sort the products array lexicographically
    //search through each word in the array for the particular searchword using moving window?
    
   
    let result = [];
    products.sort();
    
    const checker = (str, str2) => {
        //console.log(str, str2)
        if(str === str2) {
            return true;
        }
        
        return false;
    }
    for(let j = 0; j < searchWord.length; j++) {
        let inner = [];
        for(let i = 0; i < products.length; i++) {
            if(inner.length >= 3) {
                break;
            }
            if(checker(products[i].substring(0, j + 1), searchWord.substring(0, j + 1))) {
                inner.push(products[i]);
            }
        } 
        
        result.push(inner);
    }
    
    
    return result;
};