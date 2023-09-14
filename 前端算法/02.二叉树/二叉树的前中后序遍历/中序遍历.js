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


function zxLoop(h, list = []) {
    if (h) {
        zxLoop(h.left, list)
        list.push(h)
        zxLoop(h.right, list)
    }

    return list
}

console.log(zxLoop(h)) // 3, 2, 4, 1, 5, 6
