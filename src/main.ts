import emitter from "./emitter"
import indexOf from "./indexOf"
import lastIndexOf from "./lastIndexOf"

const eventBus = emitter()

eventBus.emit('update-demo', 'hi')
eventBus.emit('update-demo', 'hello')

eventBus.on('update-demo', (value) => {
  console.log(`emit: ${value}`)
})

console.log('# lastIndexOf')
console.log(lastIndexOf([1, 2, 3, 4, 5, 6], 2, 0))

console.log('# indexOf')
console.log(indexOf([1, 2, 3], 2))


const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `<h1>Hello Vite!</h1>`
