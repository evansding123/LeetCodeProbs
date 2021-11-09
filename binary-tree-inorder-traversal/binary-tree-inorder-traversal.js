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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];
    const recurse = (node) => {
        if(node === null) {
            return;
        }
        if(node.left !== null) {
            recurse(node.left)
        }
        
        result.push(node.val);
        
        if(node.right !== null) {
            recurse(node.right);
        }
        
        
    }
    
    
   recurse(root);
    return result;
};