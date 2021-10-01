/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    //have to have both pointers pointing at a particular node
    
    let a = headA;
    let b = headB;
    
    while(a !== null) {
        if(a.passed) {
            return a;
        }
        a.passed = true;
        a = a.next;
    }
    
     while(b !== null) {
        if(b.passed) {
            return b;
        }
        b.passed = true;
        b = b.next;
    }
    
    return null;
    
    
    
};