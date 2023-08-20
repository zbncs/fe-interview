// https://leetcode.cn/problems/reverse-linked-list/

function Node(value) {
    this.value = value;
    this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(node1)

function reverseLink(root) {
    let pre = null;
    let cur = root;

    while (cur) {
        // 提前保存下一个
        let temp = cur.next;
        // 先反转
        cur.next = pre;
        // 再移动
        pre = cur
        cur = temp;
    }

    return pre;
}

function reverseLink1(root) {
    if (root.next.next === null) {
        root.next.next = root;
        return root.next;
    }
    const res = reverseLink1(root.next);
    root.next.next = root;
    root.next = null;

    return res;
}

console.log(reverseLink1(node1))




