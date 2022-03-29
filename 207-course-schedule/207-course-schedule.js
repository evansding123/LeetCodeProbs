/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let numSet = {};
    let isTrue = false;
    for(course of prerequisites) {
        if(numSet[course[0]] === undefined) {
            numSet[course[0]] = [course[1]];
        } else {
            numSet[course[0]].push(course[1])
        }
    }
    
    for(course of prerequisites) {
        if(numSet[course[1]] === undefined) {
            numSet[course[1]] = [];
        } 
    }
    
    //console.log(numSet)
    
    let hash = {};
    const dfs = (node) => {
        if(hash[node] !== undefined) {
            return false;
        }
        
        if(numSet[node] === []) {
            return true;
        }
        
        hash[node] = true;
        
        for(nodes of numSet[node]) {
            if(dfs(nodes) === false) {
                return false
            }
        }
        delete hash[node];
        numSet[node] = [];
        return true;
    }
    
   
    
    for(let keys in numSet) {
        if(!dfs(keys)) {
            return false
        }
    }
    
    
    
    return true;
    
   
};