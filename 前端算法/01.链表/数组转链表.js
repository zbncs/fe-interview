function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 *
 * @param {Array} arr
 */
const arrToList = (arr) => {
    let head = new ListNode(arr[0])
    let h = {
        next: head
    }
    let n = h
    for (let i = 1; i < arr.length; i++) {
        n.next.next = new ListNode(arr[i])
        n = n.next
    }

    return h.next

}

exports.arrToList = arrToList

console.log(arrToList([1, 2, 3, 4, 5]))
