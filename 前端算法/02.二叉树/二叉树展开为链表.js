// https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/description/

const flatten = function(root) {
    const list = preLoop(root)

    for (let i = 1; i < list.length; i++) {
        const pre = list[i - 1]
        const cur = list[i]

        pre.left = null
        pre.right = cur
    }
};

function preLoop(root, list = []) {
    if (root) {
        list.push(root)
        preLoop(root.left, list)
        preLoop(root.right, list)
    }

    return list
}



