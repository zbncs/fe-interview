import {Suspense, useMemo} from "react";

const resource = (() => {
    let data = null
    let status = 'pending'
    let fetcher = null
    return {
        get() {
            if (status === 'ready') {
                return data
            }
            if (status === 'pending') {
                fetcher = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        data = 1
                        status = 'ready'
                        resolve()
                    }, 100)
                })
                status = 'fetching'
            }

            throw fetcher
        }
    }
})()

/**
 *
 * Suspense 捕获异步请求，然后会重新渲染组件
 *
 */
function A() {
    console.log(1)

    const memoed = useMemo(() => {
        console.log(2)
        return 'memo'
    }, [])

    const data = resource.get()

    console.log(3)
    return memoed + data
}

export default function Suspense3() {
    return <Suspense fallback={'loading'}>
        <A/>
    </Suspense>
}
