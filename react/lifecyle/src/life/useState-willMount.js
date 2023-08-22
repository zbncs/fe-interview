import {useEffect, useState} from 'react'

const useComponentWillMount = (fn) => {
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        setFirstRender(false)
    }, [firstRender]);

    if (firstRender) fn()
}

export default useComponentWillMount




