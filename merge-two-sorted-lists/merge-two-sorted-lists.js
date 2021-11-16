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
var mergeTwoLists = function(l1, l2) {
    //concurentlly iterate through both the linked lists, comparing them and adding them into a single linked list while iterating
    
    let curr = l1;
    let curr2 = l2;
    
    if(curr === null) {
        return curr2;
    }
    
    if(curr2 === null) {
        return curr;
    }
    
    
    if(curr.val <= curr2.val) {
        var newHead = new ListNode(curr.val);
        var result = newHead;
        curr = curr.next;
    } else {
        var newHead = new ListNode(curr2.val);
        var result = newHead;
        curr2 = curr2.next;
    }
   
    //iterate through the linked list
    while(curr !== null || curr2 !== null) {
        if(curr === null) {
            let node = new ListNode(curr2.val);
            result.next = node;
            curr2 = curr2.next;
            result = result.next;
            continue;
        } else if(curr2 === null) {
            let node = new ListNode(curr.val);
            result.next = node;
            curr = curr.next;
            result = result.next;
            continue;
        }
        //check if the second (longer) list is null, if not, then youll add hte rest of the longer linked list to 
        if(curr.val <= curr2.val) {
            let node = new ListNode(curr.val);
            result.next = node;
            curr = curr.next;
            console.log(result);
        } else {
            let node = new ListNode(curr2.val);
            result.next = node;
            curr2 = curr2.next;
            console.log(result);
        }
        
         result = result.next;
    }
    
    return newHead;
        //compare the respective values in both their nodes
            //add it onto a new head accordingly
                //return the head
};