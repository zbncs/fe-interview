// https://leetcode.cn/problems/remove-linked-list-elements/

var removeElements = function(head, val) {
  if (head === null) return head;

  // 找一个始终指向头的指针, 最终返回的他的next
  const h = {
    next: head
  }
  // 使用另一个相等的变量去循环操作
  let n = h

  while(n.next) {
    if (n.next.val === val) {
      n.next = n.next.next
    } else {
      n = n.next
    }
  }
  return h.next;
}


