// https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/description/

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function (root) {
    if (root === null) {
        return root
    }
    let queue = [root]
    while (queue.length) {
        let len = queue.length
        while (len--) {
            let node = queue.shift()
            if (len > 0) {
                node.next = queue[0]
            }

            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return root
};
