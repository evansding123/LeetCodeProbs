/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let set = new Set();
    
    let curr = head;
    
    while(curr !== null) {
        
        if(set.has(curr)) {
            return true;
        } 
        
        set.add(curr);
        
        curr = curr.next;
    }
    
    //console.log(hash)
    
    return false;
};