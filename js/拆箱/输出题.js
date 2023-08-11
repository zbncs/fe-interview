let a = {
  i: 1,
  // Replacing valueof with toString has the same effect
  // toString
  valueOf() {
    return this.i++
  }
}
if (a == 1 && a == 2 && a == 3) {
  console.log('hello medium') // hello medium
}

// const a = {
//   i: 1,
//   [Symbol.toPrimitive]() {
//     return this.i++
//   }
// }
// // Each time 'a = = xxx' is executed, the "Symbol.toPrimitive" function will be passed first. Naturally, the effect of increasing a in turn can be realized.
// if (a == 1 && a == 2 && a == 3) {
//   console.log('hello medium') // hello medium
// }