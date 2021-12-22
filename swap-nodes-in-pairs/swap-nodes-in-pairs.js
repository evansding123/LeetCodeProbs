/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    //need to hit every other node and swap it with the previous one
    
    
    //two pointers? one even and one odd
    
    let sentry = head;
    let even = head;
    let odd;
    if(head !== null) {
        odd = head.next;
        //console.log(odd);
    }
    //console.log(odd)
    
    while(even !== null && odd !== null) {
        let temp = odd.val;
        odd.val = even.val;
        even.val = temp;
        
        even = even.next.next;
        
        if(odd.next !== null) {
            odd = odd.next.next;
        } else {
            odd = odd.next;
        }
        
    }
    
    
    return sentry; 
};