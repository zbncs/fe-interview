// https://leetcode.cn/problems/subtree-of-another-tree/description/

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

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
        node.left = left
        nodeArr.push(left)

        if (!arr.length) {
            break
        }

        let right = new TreeNode(arr.shift())
        node.right = right
        nodeArr.push(right)

    }

    return root

}

const isSubtree = function (root, subRoot) {
    function isSameTree(root, sub) {
        if (root === null && sub === null) {
            return true
        }
        if (root === null || sub === null) {
            return false
        }
        if (root.val !== sub.val) {
            return false
        }

        return isSameTree(root.left, sub.left) && isSameTree(root.right, sub.right)
    }

    if (root === null) {
        return false
    }

    if (root.val === subRoot.val) {
        // 需要比较左右节点，不能直接返回isSameTree；
        if (isSameTree(root, subRoot)) {
            return true
        }

    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

// console.log(isSubtree(generateTree([3,4,5,1,2]), generateTree([4,1,2])))
console.log(isSubtree(generateTree([1, 1]), generateTree([1])))
