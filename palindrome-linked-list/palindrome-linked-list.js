/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let array = [];
    let currentNode = head;
    
    
   while(currentNode !== null) {
       array.push(currentNode.val);
       currentNode = currentNode.next;
   }
    
   
    
    const reverse = (top) => {
        let pre = null;
        let current = top;
        while(current !== null) {
            let next = current.next;
            current.next = pre;
            pre = current;
            current = next;
        }
        
        
        return pre;
    }
    
      let rev = reverse(head);
      // console.log(array);
      // console.log(rev);
    
    
    for(var i = 0; i < array.length; i++) {
        if(rev.val !== array[i]) {
            return false
        } else {
            rev = rev.next;
        }
        
    }
    
    return true;
   
    
   
    
    
//     while(current !== null) {
//         console.log('current: ', current.val, 'rev: ', rev.val);
//         current = current.next;
//         rev = rev.next;
        // if(current.val !== rev.val) {
        //     return false;
        // } else {
        //     current = current.next;
        //     rev = rev.next;
        // }
    //}
    
    //return true;
    
    
   
};