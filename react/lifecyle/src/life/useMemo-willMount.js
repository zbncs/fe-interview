import {useMemo} from "react";

const useWillMountMemo = (fn) => {
    useMemo(() => {
        fn()
    }, []);
}

export default useWillMountMemo