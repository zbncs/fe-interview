import {useState} from "react";
// 187-9738-0937
export default function PhoneNumberInput() {
    const [phone, setPhone] = useState('');
    const formatePhone = (val) => {
        let res = ''
        let j = 0
        for (let i = 0; i < val.length; i++) {
            res += val[i]
            j++
            if (j === 3) {
                res += '-'
            } else if ((j - 3) % 4 === 0) {
                res += '-'
            }
        }
        return res.slice(0, -1)
    }
    const handleChange = (e) => {
        const value = e.target.value
        setPhone(formatePhone(value))
    }

    return (
        <>
            <input
                type='text'
                data-testid="phone-number-input"
                value={phone}
                onChange={handleChange}
            />
        </>
    )
}
