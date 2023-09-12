let arr = [1, 2, 3];

shuffle(arr);
console.log(arr)

shuffle(arr);
console.log(arr)

shuffle(arr);
console.log(arr)

function shuffle1(arr) {
    arr.sort((a, b) => Math.random() - 0.5)
}

/**
 *
 * @param {Array} arr
 */
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}


