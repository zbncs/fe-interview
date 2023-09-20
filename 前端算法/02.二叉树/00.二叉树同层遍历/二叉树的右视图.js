// https://leetcode.cn/problems/binary-tree-right-side-view/description/

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
        console.log(112, node, left)
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

const root = generateTree([1,2,3,null,5,null,4])

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = function(root) {
    let res = []

    if (root === null) {
        return res
    }

    let queue = [root]

    while (queue.length) { // 进行下一层进行比较
        let len = queue.length

        while (len--) { // 当前层
            let node = queue.shift()

            // 只取最后一个
            if (len === 0) {
                res.push(node.val)
            }

            // 下一层
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }

    return res
};


console.log(rightSideView(root))
