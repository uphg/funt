import splitWordLine from './_splitWordLine'
import toFirstLetterCaps from './_toFirstLetterCaps'

import { find, findIndex, findLast, findLastIndex } from "./index"

const a = [
  { key: 'a', index: 0},
  { key: 'b', index: 1},
  { key: 'c', index: 2},
  { key: 'd', index: 3},
  { key: 'e', index: 4},
  { key: 'f', index: 5}
]

const obj = find(a, (item) => item.key === 'z')

console.log('obj')
console.log(obj)

// # splitWordLine
console.log('# splitWordLine')

const string1 = 'TheCaseOfThisConversionString'

const splitString1 = splitWordLine(string1, '_')
console.log(string1)
console.log(splitString1)

// # toFirstLetterCaps
console.log('\n# toFirstLetterCaps')

const string2 = 'the_case_of_this_conversion_string'

const splitString2 = toFirstLetterCaps(string2)
console.log(string2)
console.log(splitString2)

const app = document.querySelector('#app')

app.innerHTML = `<h1>Hello Vite!</h1>`
