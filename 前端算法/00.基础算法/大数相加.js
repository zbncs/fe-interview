function bigAddString(num1, num2) {
    const str1 = num1.toString()
    const str2 = num2.toString()

    const maxLen = Math.max(str1.length, str2.length)

    const temp1 = str1.padStart(maxLen, '0')
    const temp2 = str2.padStart(maxLen, '0')

    let res = ''
    let j = 0
    let g = 0

    for (let i = maxLen - 1; i >= 0; i--) {
        const temp = parseInt(temp1[i]) + parseInt(temp2[i]) + j
        j = Math.floor(temp / 10)
        g = temp % 10

        res = g + res
    }

    return res

}

console.log(bigAddString('11121221343434000000000000000000', '434343'))
