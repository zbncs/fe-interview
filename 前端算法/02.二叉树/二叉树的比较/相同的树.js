// https://leetcode.cn/problems/same-tree/description/

const isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true
    }

    if (p === null || q === null) {
        return false
    }

    if (p.val !== q.val) {
        return false
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

const isSameTree1 = function(p, q) {

}




