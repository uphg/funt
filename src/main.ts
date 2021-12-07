import emitter from "./emitter"
// import indexOf from "./indexOf"
// import lastIndexOf from "./lastIndexOf"

console.log('# eventBus')
const eventBus = emitter()

const eventName = 'update-demo'

const onFun = (value: string) => {
  console.log(`on - emit: ${value}`)
}
eventBus.on(eventName, onFun)

eventBus.once(eventName, onFun)

// eventBus.off(eventName, onFun)

eventBus.emit(eventName, 'hi')
eventBus.emit(eventName, 'hello')
eventBus.emit(eventName, 'world')

// console.log('\n# lastIndexOf')
// console.log(lastIndexOf([1, 2, 3, 4, 5, 6], 2, 0))

// console.log('\n# indexOf')
// console.log(indexOf([1, 2, 3], 2))


const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `<h1>Hello Vite!</h1>`
