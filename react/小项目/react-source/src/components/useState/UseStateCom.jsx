import {useEffect, useState} from "react";

export default function UseStateCom() {
    const [state1, setState1] = useState(1);

    const [state2] = useState(() => {
        console.log(2);
        return 2;
    });

    console.log(state1);

    useEffect(() => {
        setState1(3);
    }, []);

    return null;
}
