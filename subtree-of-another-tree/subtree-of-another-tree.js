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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    
    if (!root) return false;
    if (isMatch(root, subRoot)) return true;
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    
    function isMatch (node, subroot) {
        if (node === null && subroot === null) return true;
        if (node !== null && subroot === null) return false;
        if (node === null && subroot !== null) return false;
            
        return (node.val === subroot.val) && isMatch(node.left, subroot.left) && isMatch(node.right, subroot.right);
    }
    
};