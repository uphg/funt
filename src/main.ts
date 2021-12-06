// import findIndex from '../dist/es/findIndex'

// console.log('findIndex')
// console.log(findIndex([1, 3, 4, 1, 3], (item) => item === 3))

import { find, /* findIndex, findLast, findLastIndex */ } from "./index"

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

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `<h1>Hello Vite!</h1>`
