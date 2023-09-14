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

// console.log(h)

function preLoop(h, list = []) {
    if (h) {
        list.push(h)
        preLoop(h.left, list)
        preLoop(h.right, list)
    }

    return list
}

console.log(preLoop(h)) // 1, 2, 3, 4, 5, 6
