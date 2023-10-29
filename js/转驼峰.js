/**
 *
 * @param {string} str
 * @returns string
 */
function toUp(str) {
    return str.split('-').map((it, index) => {
        if (index > 0) {
            return it.slice(0, 1).toUpperCase() + it.slice(1)
        }
        return it
    }).join('')
}

console.log(toUp('font-size'))
console.log(toUp('background-color'))

console.log(parseInt('001001'))


