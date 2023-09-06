function getMoney(m) {
    const money = m.toString()
    let res = ''
    let j = 0
    for (let i = money.length - 1; i >= 0; i--) {
        res += money[i]
        j++
        if (j % 3 === 0) {
            res += ','
        }
    }

    return res.split('').reverse().join('')
}


console.log(getMoney(1234567))
