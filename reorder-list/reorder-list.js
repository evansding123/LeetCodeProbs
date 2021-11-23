/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    //find the middle of the linkedlist, reverse the second part, and merge the two sorted linked lists
    
    
    let dummy = new ListNode();
    dummy = head;
    
    let slow = head;
    let fast = head;
    
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
   
    
    let prev = null;
    let curr = slow;
    while(slow !== null) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp; 
    }
    
    
    while (prev.next != null) {
      tmp = dummy.next;
      dummy.next = prev;
      dummy = tmp;

      tmp = prev.next;
      prev.next = dummy;
      prev = tmp;
    }
    
    
};