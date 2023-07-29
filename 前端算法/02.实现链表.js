class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
  }
  toString() {
    let current = this.head;
    let str = '';
    while (current) {
      str += `${current.val} => `;
      current = current.next;

      if (!current) str = str.slice(0, -4);
    }
    return str;
  }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);

console.log(linkedList.toString());




