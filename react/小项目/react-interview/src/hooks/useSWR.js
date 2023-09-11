import {useEffect, useState, useCallback} from "react";

export function useSWR(_key, fetcher) {
    // 使用useRef不会更新视图
    // const dataRef = useRef(null);
    // const errorRef = useRef(null);

    const [data, setData] = useState(undefined);
    const [error, setError] = useState(null);

    const requset = useCallback(() => fetcher, [_key]);

    useEffect(() => {
       Promise.resolve(requset).then(res => {
           setData(res)
       }).catch(error => {
           setError(error)
       })
    }, [])

    return {
        data,
        error
    }
}


