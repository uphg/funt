import omit from './omit'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = '<h1>Hello Vite!</h1> <button id="btn1">点击防抖</button> <button id="btn2">点击节流</button>'

const symbolKey = Symbol()
const obj = { a: 1, b: 2, [symbolKey]: 3 }

const obj1 = omit(obj, ['a', symbolKey])
console.log('obj1')
console.log(obj1)
