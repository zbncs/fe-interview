// 请编写函数，该函数需将参数中每节点的字段 id 转为 value，
// 并在每个节点生成当前节点距离顶层的路径valuePath
const srcTree = [ // 源数据
    {
        id: 1,
        name: '测试 1',
        abc: 123,
        bcd: 456,
        children: [
            {
                id: 11,
                abc: 111,
                bcd: 222,
                name: '测试 1-1',
                children: [
                    {
                        id: 111,
                        abc: 1111,
                        bcd: 2222,
                        name: '测试 2-1'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: '测试 2',
        abc: 123,
        bcd: 456
    }
]
// ==>
const distTree = [ // 结果
    {
        value: 1,
        valuePath: [1],
        name: '测试 1',
        children: [
            {
                value: 11,
                valuePath: [1, 11],
                name: '测试 1-1',
                children: [
                    {
                        value: 111,
                        name: '测试 2-1',
                        valuePath: [1, 11, 111]
                    }
                ]
            }
        ]
    }
]

function transformTree(treeArr) {
    function tree(treeArr, id = []) {
        return treeArr.map(it => {
            const temp = {
                value: it.id,
                name: it.name,
                valuePath: [...id, it.id],
                children: it.children && it.children.length ? it.children : []
            }

            it = temp

            if (it.children && it.children.length) {
                it.children = tree(it.children, it.valuePath)
            }
            return it
        })
    }

    return tree(treeArr, [])
}

console.log(transformTree(srcTree))

const fun = (arr, path = []) => {
    arr.forEach(a => {
        a.path = [...path, a.id];
        if (a?.children?.length) {
            fun(a?.children, a.path);
        }
    });
};
fun(srcTree);
console.log(srcTree);





