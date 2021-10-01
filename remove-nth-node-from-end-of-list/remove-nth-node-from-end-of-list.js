/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    
    //when the fast pointer reaches the end the n slower pointer will be at the place to remove
    let dummy = new ListNode();
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;
    
    
    for(let i = 1; i <= n + 1; i++) {
        if(fast !== null){
            fast = fast.next;
        }
        
    }
    
    while(fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    
    
    if(slow.next !== null) {
        slow.next = slow.next.next;
    } 
    
    return dummy.next;
    
    
//     while(fast !== null) {
//         fastCount++;
//         if(fastCount - slowCount > 1) {
//             slow = slow.next;
//         }
        
//         fast = fast.next;
//     }
    
    
//     if(slow.next !== null) {
//         slow.next = slow.next.next;
//     } else {
//         head = null;
//     }
    
//     return head;
    
    
    

    
};