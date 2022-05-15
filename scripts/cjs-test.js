const findIndex = require('../dist/cjs/findIndex')
const findLastIndex = require('../dist/cjs/findLastIndex')
console.log('cjs example')

console.log('# findIndex')
console.log(findIndex([1, 2, 3], (item) => item === 2))

console.log('# findLast')
console.log(findLastIndex([1, 2, 3, 2], (item) => item === 2))
