/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result =new ListNode(0); 
   
    let dummy = result
   
    let carry = 0
    
    //console.log(dummy);
    
    while(l1 !== null || l2 !== null) {
        
        if(l1 === null) {
            l1 = new ListNode(0);
        }
        if(l2 === null) {
            l2 = new ListNode(0);
        }
        let added = l1.val + l2.val + carry;
        carry = 0;
        if(added >= 10) {
           
            carry = Math.floor(added /10);
            added = added % 10;
        }
        
        result.next = new ListNode(added);
        result = result.next;
        //console.log(added)
        
       
        l1 = l1.next;
        l2 = l2.next;
    }
    
    if(carry > 0) {
        result.next = new ListNode(carry);
    }
   
    return dummy.next;
};