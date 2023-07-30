// https://leetcode.cn/problems/linked-list-cycle/

// 快慢指针法
var hasCycle = function(head) {
    let fast = head;
    let slow = head;

    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        
        // 判断链表的节点相等
        if(fast === slow) {
            return true;
        }
    }
    return false;
};


