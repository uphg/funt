import { pick } from './index'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = '<h1>Hello Vite!</h1> <button id="btn1">点击防抖</button> <button id="btn2">点击节流</button>'

const obj = { a: 1, b: 2, c: 3 }

const obj1 = pick(obj, ['a', 'b'])
console.log('obj1')
console.log(obj1)
