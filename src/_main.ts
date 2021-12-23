import remain from './remain'
import deepClone from './deepClone'

console.log('remain')
console.log(remain([1, 2, 3, 4, 5], 1, 2))
console.log(remain([1, 2, 3, 4, 5], 2))

{
  // let count = {
  //   value: 0
  // }
  
  // const obj: any = {
  //   child: {}
  // }
  // let temp = obj.child
  // for (let i = 0; i < 10000; i++) {
  //   temp.child = {}
  //   temp = temp.child
  // }
  
  // const obj2 = deepClone(obj, count)
  
  // console.log(obj2)
  // console.log(count.value)
}

{
  const obj: { [key: string]: unknown } = { a: 'hi' }
  obj.self = obj
  const obj2 = deepClone(obj)
  console.log(obj2 !== obj)
}

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = '<h1>Hello Vite!</h1>'
