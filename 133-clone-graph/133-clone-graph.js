/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    //base case is if the neighbors is undefined
    let hash = {};
    
    const dfs = (root) => {
        
        if(root === null) {
            return root;
        } 
        
        if(hash[root.val] !== undefined) {
            return hash[root.val];
        }
        
        let newNode = new Node(root.val, []);
        hash[root.val] = newNode;
      //if the neighbor is already in hash table, push the node in the hash into the neighbor array
       for(neighbor of root.neighbors) {
           newNode.neighbors.push(dfs(neighbor));
       }
            
        
        return newNode;
    }
    
    
    return dfs(node);
    //return newNode;
};