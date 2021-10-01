/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
    
    
    while(head !== null) {
            head.seen = true;
            if(head.next !== null && head.next.seen) {
                //console.log(head.next.seen)
                return head.next;
            }
           
            head = head.next;
            
        }
    
    return null;
};

