/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let count = 1;
    if(root === null) {
        return 0;
    }
    
    
    const dfs = (node, max) => {
        if(node === null) {
            return 0;
        }
        
        let left = dfs(node.left, max) + 1;
        let right = dfs(node.right, max) + 1;
        
        return left > right ? left : right;
        
    }
    return dfs(root, -999);
};