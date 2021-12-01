import splitCapsWord from './_splitCapsWord'
import toFirstCaps from './_toFirstCaps'

import { find, findIndex, findLast, findLastIndex } from "./index"

const a = [
  { key: 'a', index: 0},
  { key: 'b', index: 1},
  { key: 'c', index: 2},
  { key: 'd', index: 3},
  { key: 'e', index: 4},
  { key: 'f', index: 5}
]

const obj = find(a, (item: { key: string, index: number}) => item.key === 'z')

console.log('obj')
console.log(obj)

// # splitCapsWord
console.log('# splitCapsWord')

const string1 = 'TheCaseOfThisConversionString'

const splitString1 = splitCapsWord(string1, '_')
console.log(string1)
console.log(splitString1)

// # toFirstCaps
console.log('\n# toFirstCaps')

const string2 = 'the_case_of_this_conversion_string'

const splitString2 = toFirstCaps(string2)
console.log(string2)
console.log(splitString2)

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `<h1>Hello Vite!</h1>`
