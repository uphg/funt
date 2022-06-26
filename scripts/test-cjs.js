const findIndex = require('../dist/findIndex')
const findLastIndex = require('../dist/findLastIndex')
console.log('cjs example')

console.log('# findIndex')
console.log(findIndex([1, 2, 3], (item) => item === 2))

console.log('# findLast')
console.log(findLastIndex([1, 2, 3, 2], (item) => item === 2))


function fn(){
  console.log(123)
  console.log(111)
}
