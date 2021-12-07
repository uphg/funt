import emitter from "./emitter"

console.log('# eventBus')
const eventBus = emitter()

const eventName = 'update-demo'

const onFun = (value: string) => {
  console.log(`emit: ${value}`)
}

eventBus.once(eventName, onFun)
eventBus.on(eventName, onFun)

// eventBus.off(eventName, onFun)

eventBus.emit(eventName, 'hi')
eventBus.emit(eventName, 'hello')
eventBus.emit(eventName, 'world')

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `<h1>Hello Vite!</h1>`
