function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const generateTree = (arr) => {
    let root = new TreeNode(arr.shift())
    let nodeArr = [root]

    while (arr.length) {

        let node = nodeArr.shift()

        let left = new TreeNode(arr.shift())
        node.left = left.val === null ? null : left
        nodeArr.push(left)

        if (!arr.length) {
            break
        }

        let right = new TreeNode(arr.shift())
        node.right = right.val === null ? null : right
        nodeArr.push(right)

    }

    return root

}

const root = generateTree([1,2,5,3,4,8,6])

/**
 *
 *              1
 *          2       5
 *      3     4  8    6
 */


function zxLoop(h, list = []) {
    if (h) {
        zxLoop(h.left, list)
        list.push(h.val)
        zxLoop(h.right, list)
    }

    return list
}

console.log(zxLoop(root)) // 3, 2, 4, 1, 8, 5, 6
