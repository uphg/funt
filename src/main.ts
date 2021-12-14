import * as funny from './index'
import lastIndexOf from './lastIndexOf'

console.log('funny')
console.log(funny)

console.log('lastIndexOf')
console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 3))
console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 5))

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = '<h1>Hello Vite!</h1>'
