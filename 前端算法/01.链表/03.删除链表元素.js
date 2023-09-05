// https://leetcode.cn/problems/remove-linked-list-elements/
function Node(value) {
  this.value = value;
  this.next = null;
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let removeElements = function(head, val) {
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

removeElements(node1, 3)


