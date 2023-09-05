/**
 *
 * @param urls
 * @param maxNum
 */
function concurrentRequest(urls, maxNum) {

    return new Promise(resolve => {
        let res = []
        let i = 0
        let ind = 0
        async function request() {
            const url = urls[i]
            ind = i
            i++
            try {
                const temp = await fetch(url)
                res[ind] = temp
            } catch (e) {
                res[ind] = e
            } finally {
                if (ind < urls.length) {
                    request()
                }
            }

            if (res.length === urls.length) {
                resolve(res)
            }
        }

        for (let j = 0; j < maxNum; j++) {
            request()
        }
    })


}





