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
var oddEvenList = function(head) {
    
    let sent = new ListNode();
    
    let sent2 = new ListNode();
    
    let end = new ListNode();
    
    if(head === null) {
        return head;
    }
    sent.next = head;
    sent2.next = head;
    sent2 = sent2.next.next;
    sent = sent.next;
    
    //console.log(sent, sent2)
    
    let odd = sent;
    let even = sent2;
    let curr = head; 
    
     console.log('dis even', even);
    
    while(curr.next !== null) {
        
        odd.next = curr.next.next;
        //console.log(odd);
        if(curr.next === null) {
            end = odd;
            break;
        }
        
        even.next = curr.next.next;
       
        odd = odd.next;
        even = even.next;
        end = odd;
        curr = curr.next;
       
    }
    
    // console.log('sent2', sent2)
    // console.log(end);
    

    
    end.next = sent2
    
    return sent;
    
};