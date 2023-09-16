function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root = [1,2,5,3,4,null,6]

const temp = root.map(it => new TreeNode(it, null, null))


const l = new TreeNode(2, temp[3], temp[4])
const r = new TreeNode(5, null, temp[6])
const h = new TreeNode(1, l, r)


/**
 *          1
 *      2       5
 *    3   4       6
 */


function LaterLoop(h, list = []) {
    if (h) {
        LaterLoop(h.left, list)
        LaterLoop(h.right, list)
        list.push(h)
    }

    return list
}

console.log(LaterLoop(h)) // 3, 4, 2, 6, 5, 1
