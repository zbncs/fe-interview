function getPhone(ph) {
    const telStr = ph.toString()
    let res = ''
    let j = 0

    for (let i = 0; i < telStr.length; i++) {
        res += telStr[i]
        j++
        if (i === 2) {
            res += ' '
            j = 0
        } else if (j % 4 === 0) {
            res += ' '
        }
    }

    return res.slice(0, -1)
}

console.log(getPhone(18765890976))



