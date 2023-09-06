// 版本号排序
const versions = ["1.2.1", "1.0.2", "1.3.2", "1.1", "1.2", "1", "1.10.0"]

const compareVersion = (version1, version2) => {
    const v1Arr = version1.split('.')
    const v2Arr = version2.split('.')

    let maxLen = Math.max(v1Arr.length, v2Arr.length)

    for (let i = 0; i < maxLen; i++) {
        const it1 = i > v1Arr.length - 1 ? 0 : parseInt(v1Arr[i])
        const it2 = i > v2Arr.length - 1 ? 0 : parseInt(v2Arr[i])

        if (it1 > it2) {
            return 1
        } else if (it1 < it2) {
            return -1
        }
    }

    return 0
}
versions.sort((a, b) => compareVersion(a, b))

console.log(11, versions)


// versions.sort((a, b) => {
//     let i = 0;
//     const arr1 = a.split('.');
//     const arr2 = b.split('.');
//
//     while (true) {
//         const s1 = arr1[i];
//         const s2 = arr2[i++];
//
//         if (s1 === undefined || s2 === undefined) {
//             return arr1.length - arr2.length;
//         }
//
//         if (s1 === s2) continue;
//
//         return s1 - s2;
//     }
// });
//
// console.log(versions)

