/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    //have to check both trees at the same time
    const dfs = (node, node2) => {
        if(node === null && node2 === null) {
            return true;
        }
        
        if(node === null && node2 !== null) {
            return false
        }
        
         if(node2 === null && node !== null) {
            return false
        }
        
        if(node.val !== node2.val) {
            return false;
        }
        
        return dfs(node.left, node2.left) && dfs(node.right, node2.right);
    }
    
    
    return dfs(p, q);
};