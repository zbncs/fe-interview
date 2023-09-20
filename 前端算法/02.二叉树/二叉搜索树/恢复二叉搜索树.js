// https://leetcode.cn/problems/recover-binary-search-tree/description/

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

// const root = generateTree([3,1,4,null,null,2])
const root = generateTree([1,3,null,null,2])

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = function(root) {
    let arr = []
    let first, second
    function deep(root) {
        if (root === null) {
            return
        }

        deep(root.left)

        // @todo
        arr.push(root)

        deep(root.right)
    }

    deep(root)

    // console.log(123, arr)
    // 只有两个错误的节点

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].val > arr[i+1].val) {
            if (!first) {
                first = arr[i]
            }
            second = arr[i+1]
        }
    }
    let temp = first.val
    first.val = second.val
    second.val = temp
}

recoverTree(root)

console.log(root)
