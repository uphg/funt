import remain from './remain'

console.log('remain')
console.log(remain([1, 2, 3, 4, 5], 1, 2))
console.log(remain([1, 2, 3, 4, 5], 2))

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = '<h1>Hello Vite!</h1>'
