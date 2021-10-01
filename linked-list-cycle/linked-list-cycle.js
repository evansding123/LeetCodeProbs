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
    
   
   
        while(head !== null) {
            head.seen = true;
            
            if(head.next !== null && head.next.seen) {
                return true;
            }
            
            head = head.next;
        }
    
    return false;
    
    
     
};