var swapPairs = function(head) {
    //need to hit every other node and swap it with the previous one
    
    
    //two pointers? one even and one odd
    
    let dummy = new ListNode(0, head);
    let prev = dummy;
    let curr = head;
    
    
    while(curr && curr.next ) {
        let second = curr.next.next;
        let first = curr.next;
        first.next = curr;
        curr.next = second;
        prev.next = first;
        
        prev = curr;
        curr = second;
        
        
    }
    
    
    return dummy.next; 
};