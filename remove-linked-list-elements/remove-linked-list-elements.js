/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    let sent = new ListNode();
    
    
    
    sent.next = head;
    
    let curr = head;
    
    let prev = sent;
    
    
    while(curr !== null) {
        if(curr.val === val) {
            prev.next = curr.next;
           
        } else {
            prev = curr
            
        }
        
        curr = curr.next;
        
        
        
        
    }
    
    return sent.next;
};