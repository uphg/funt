import * as funny from './index'

console.log('funny')
console.log(funny)

import Emitter from "./emitter"

console.log('# eventBus')
const eventBus = new Emitter()

const eventName1 = 'update-demo1'

const onFun = (value: string) => {
  console.log(`emit: ${value}`)
}

eventBus.once(eventName1, onFun)
eventBus.on(eventName1, onFun)

eventBus.emit(eventName1, 'hi')
eventBus.emit(eventName1, 'hello')
eventBus.emit(eventName1, 'world')

const eventName2 = 'update-demo1'

eventBus.once(eventName2, onFun)
eventBus.on(eventName2, onFun)

eventBus.clear()

eventBus.emit(eventName2, 'hi2')
eventBus.emit(eventName2, 'hello2')
eventBus.emit(eventName2, 'world2')

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `<h1>Hello Vite!</h1>`
