// 版本号格式参考如：1.0.0
function compareVersion(source, target) {
    // code here
    const sourceArr = source.split('.')
    const targetArr = target.split('.')
    const maxLen = Math.max(sourceArr.length, targetArr.length)

    for (let i = 0; i < maxLen; i++) {
        const s = i >= sourceArr.length ? 0 : parseInt(sourceArr[i])
        const t = i >= targetArr.length ? 0 : parseInt(targetArr[i])

        if (s > t) {
            return 1
        } else if (s < t) {
            return -1
        }
    }

    return 0

}


// 调用参考
console.log(compareVersion('1.0.3', '1.0.5'))
console.log(compareVersion('1.0.7', '1.0.5'))
console.log(compareVersion('1.1.3', '1.0.5'))
console.log(compareVersion('1.0.5', '1.0.5'))
