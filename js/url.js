function urlToObj(url) {
    // code here
    const tempUrl = new URL(url)
    const o = {
        path: tempUrl.origin + tempUrl.pathname,
        query: {}
    }

    const map = tempUrl.searchParams

    for (const [k, v] of map) {
        o.query[k] = v
    }


    return o

}

function objToUrl(obj) {
    // code here
    let res = obj.path

    if (Object.keys(obj.query).length !== 0) {
        res += '?'
        for (const key in obj.query) {
            res += `${key}=${obj.query[key]}&`
        }

        return res.slice(0, -1)
    }


    return res

}

// 调用参考
const url = 'https://www.douyin.com/abc?foo=1&bar=2';
const urlObj = urlToObj(url);
console.log(urlObj);
// 输出
// {
//     path: 'https://www.douyin.com/abc',
//     query: {
//         foo: '1',
//         bar: '2'
//     }
// }
urlObj.query.coo = '3'
const newUrl = objToUrl(urlObj);
console.log(newUrl);
// 输出 https://www.douyin.com/abc?foo=1&bar=2&coo=3
