import remain from './remain'

console.log('remain')
console.log(remain([1, 2, 3, 4, 5], 1, 2))
console.log(remain([1, 2, 3, 4, 5], 2))

const map = new Map()

const keys = ['clear', 'constructor', 'delete', 'forEach', 'get', 'has', 'size']

let count = 0

for (const key of keys) {
  (Map.constructor[key]) && (count+=1)
}

console.log('keys.length')
console.log(keys.length)
console.log('count')
console.log(count)
console.log(map.constructor === Map)

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = '<h1>Hello Vite!</h1>'
