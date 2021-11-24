import { find, findIndex, findLast, findLastIndex } from "./index"

const a = [
  { key: 'a', index: 0},
  { key: 'b', index: 1},
  { key: 'c', index: 2},
  { key: 'd', index: 3},
  { key: 'e', index: 4},
  { key: 'f', index: 5}
]

const obj = find(a, (item) => item.key === 'x')

console.log('obj')
console.log(obj)

const app = document.querySelector('#app')

app.innerHTML = `<h1>Hello Vite!</h1>`
