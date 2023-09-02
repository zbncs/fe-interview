function formatePhone(str) {
    let res = ''
    let j = 0
    for (let i = 0; i < str.length; i++) {
        res += str[i]
        j++
        if (j === 3) {
            res += ' '
        } else if ((j - 3) % 4 === 0) {
            res += ' '
        }
    }

    return res
}

console.log(formatePhone('18698760347'))



