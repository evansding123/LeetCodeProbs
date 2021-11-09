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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let count = 0;
    const recurse = (node) => {
        if(node.left !== null) {
            recurse(node.left);
        }
        
        if(node.right !== null) {
            recurse(node.right);
        }
        
        if(node.val >= low && node.val <= high) {
            count+= node.val;
        }
        
    }
    
    recurse(root);
    return count;
};