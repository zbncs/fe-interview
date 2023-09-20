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


function preLoop(h, list = []) {
    if (h) {
        list.push(h.val)
        preLoop(h.left, list)
        preLoop(h.right, list)
    }

    return list
}

console.log(preLoop(root)) // 1, 2, 3, 4, 5, 6
