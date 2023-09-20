// https://leetcode.cn/problems/validate-binary-search-tree/description/

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

const root = generateTree([6,1,10,0,5,7,11])

// 有效 二叉搜索树定义如下：
//
// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function (root) {
    let pre = -Infinity
    function deep(root) {
        if (root === null) {
            return true
        }

        let left = deep(root.left)

        // 采用中序遍历
        if (pre >= root.val) {
            return false
        }

        console.log(123, root.val)

        pre = root.val


        let right = deep(root.right)

        return left && right
    }

    return deep(root)
};

console.log(isValidBST(root))
