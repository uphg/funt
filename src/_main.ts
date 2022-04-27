import {
  /* remain, deepClone, isFinite, throttle,
  chunk,  debounce, each, map, find, findIndex, 
  findLast, findLastIndex, indexOf, hasInstance, create, isError, lastIndexOf, delay,  */
  flatMap, flatMapDeep, values
} from './index'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = '<h1>Hello Vite!</h1> <button id="btn1">点击防抖</button> <button id="btn2">点击节流</button>'

// console.log('remain')
// console.log(remain([1, 2, 3, 4, 5], 1, 2))
// console.log(remain([1, 2, 3, 4, 5], 2))

{
  console.log('flatMap')
  const array = [1, 2, 3]
  console.log(flatMap<number>(array, (item: number) => [item, item]))
  console.log(flatMapDeep(array, (item: number) => [[[[[[[item, item]]]]]]]))
}

{
  const obj = { a: 1, b: 2 }
  const vals = values(obj)
  console.log('vals')
  console.log(vals)
}

// {
//   console.log('delay')
//   delay((p1: string, p2: string) => {
//     console.log(p1, p2)
//   }, 1000, 'hello','hi')
// }

// {
//   console.log('indexOf 1、4')
//   const array = [1, 2, 3, 4, 2]

//   console.log(indexOf(array, 2))
//   // => 1

//   console.log(indexOf(array, 2, 2))
//   // => 4
// }

// {
//   console.log('lastIndexOf 4、1')
//   const array = [1, 2, 3, 4, 2]

//   console.log(lastIndexOf(array, 2))
//   // => 4
  
//   console.log(lastIndexOf(array, 2, 2))
//   // => 4
// }

// {
//   console.log('isError')
//   console.log(isError({ name: 'hi', message: 'hi' }))
// }

// {
//   console.log('create')
//   console.log(create(Array.prototype))
//   console.log(create(Array.prototype, { 0: 1, 1: 2, length: 2 }))
// }

// {
//   console.log('hasInstance([], Array)')
//   console.log(hasInstance([], Array))
// }

// // {
// //   const users = [
// //     { id: 1, age: 16, name: 'Jack' },
// //     { id: 2, age: 20, name: 'Church' },
// //     { id: 3, age: 22, name: 'Turing' },
// //     { id: 4, age: 18, name: 'Neumann' }
// //   ]
  
// //   const result = findLast(users, (user) => user.age > 18)
// //   // => { id: 3, age: 22, name: 'Turing' }
// //   console.log('findLast')
// //   console.log(result)
// // }

// // {
// //   const array = [1, 2, 3, 4, 3, 2, 1]

// //   const result = findLastIndex(array, (item) => item === 3, 3)
// //   console.log('findLastIndex')
// //   console.log(result)
// // }

// // {
// //   const users = [
// //     { id: 1, age: 16, name: 'Jack' },
// //     { id: 2, age: 20, name: 'Church' },
// //     { id: 3, age: 22, name: 'Turing' },
// //     { id: 4, age: 18, name: 'Neumann' }
// //   ]
  
// //   const result = findIndex(users, (user) => user.age > 18)
// //   console.log('findIndex')
// //   console.log(result)
// // }

// // {
// //   const users = [
// //     { id: 1, age: 16, name: 'Jack' },
// //     { id: 2, age: 20, name: 'Church' },
// //     { id: 3, age: 22, name: 'Turing' },
// //     { id: 4, age: 18, name: 'Neumann' }
// //   ]
  
// //   const result = find(users, (user) => user.age > 18)
// //   console.log('find')
// //   console.log(result)
// // }

// {
//   const array = map<number>({
//     0: 1,
//     1: 2,
//     2: 3,
//     length: 3
//   }, (item) => item * 2)
//   console.log(array)
// }

// {
//   each<number>([1, 2, 3, 4, 5, 6, 7], (item) => {
//     console.log(item)
//   })

//   each([1, 2, 3], (item, index) => console.log(`${item} - ${index}`))
// }

// {
//   // let count = {
//   //   value: 0
//   // }
  
//   // const obj: any = {
//   //   child: {}
//   // }
//   // let temp = obj.child
//   // for (let i = 0; i < 10000; i++) {
//   //   temp.child = {}
//   //   temp = temp.child
//   // }
  
//   // const obj2 = deepClone(obj, count)
  
//   // console.log(obj2)
//   // console.log(count.value)
// }

// // {
// //   const obj: { [key: string]: unknown } = { a: 'hi' }
// //   obj.self = obj
// //   const obj2 = deepClone(obj)
// //   console.log(obj2 !== obj)
// // }

// // {
// //   // clone Set
// //   const obj = {
// //     a: [1, 2, 3],
// //     b: new Set([4, 5, 6]),
// //     c: {
// //       d: 'hi',
// //       e: new Set([7, 8, 9])
// //     }
// //   }

// //   const obj2 = deepClone(obj)
// //   console.log('Set')
// //   console.log(obj)
// //   console.log(obj2)
// // }

// // {
// //   // clone Map
// //   const obj = {
// //     a: [1, 2, 3],
// //     b: new Map([
// //       ['a', 1],
// //       ['b', 2],
// //       ['c', 3]
// //     ]),
// //     c: {
// //       d: 'hi',
// //       e: new Map([
// //         ['a', 1],
// //         ['b', 2],
// //         ['c', 3]
// //       ])
// //     }
// //   }


// //   const obj2 = deepClone(obj)
// //   console.log('Map')
// //   console.log(obj)
// //   console.log(obj2)
// // }

// // {
// //   const numberObj = new Number(3)
// //   const booleanObj = new Boolean(false)
// //   const stringObj = new String('')
// //   const obj = {
// //     a: [numberObj, booleanObj, booleanObj, 1, 2, 3],
// //     b: {
// //       p1: stringObj,
// //       p2: 'hi'
// //     },
// //     c: {
// //       b1: numberObj,
// //       b2: booleanObj,
// //       b3: booleanObj,
// //       b4: 1,
// //       b5: 2,
// //       b6: 3
// //     }
// //   }
    
// //   const obj2 = deepClone(obj)
// //   console.log('Packaging Object')
// //   console.log(obj)
// //   console.log(obj2)
// // }

// // {
// //   const a = [1, 2, 3] as any
// //   a.p1 = '123'
// //   a.p2 = '456'
// //   a[Symbol()] = 'hi'
// //   const a2 = deepClone(a)
// //   console.log('a')
// //   console.log(a)
// //   console.log('a2')
// //   console.log(a2)
// // }

// // {
// //   let index = 0
// //   const length = 10
  
// //   while (index < length) {
// //     console.log(index)
// //     index += 1
// //   }
// // }

// // {
// //   console.log('## Copy symbol')
// //   const object = {
// //     p1: 'a',
// //     p2: 'b',
// //     p3: 'c',
// //     [Symbol()]: 'd',
// //     [Symbol()]: 'e',
// //     [Symbol()]: 'f'
// //   }
// //   const object2 = deepClone(object)
// //   console.log('deepClone copy symbol property')
// //   console.log(object)
// //   console.log(object2)
// // }

// // {
// //   console.log('## isFinite')
// //   console.log('isFinite(true)')
// //   console.log(isFinite(true))
// //   console.log('isFinite(Infinity)')
// //   console.log(isFinite(Infinity))
// // }

// // {
// //   console.log('deepClone DataView')
// //   const buffer = new ArrayBuffer(16)
// //   const view1 = new DataView(buffer)
// //   const view2 = new DataView(buffer, 12, 4)

// //   const view3 = deepClone(view1)
// //   const view4 = deepClone(view2)
// //   console.log(view1)
// //   console.log(view3)
// //   console.log(view2)
// //   console.log(view4)
// // }

// // {
// //   console.log('## debounce')

// //   const clickButton = debounce(() => {
// //     console.log('debounce 被点击了')
// //   }, 5000)
// //   const btn1 = document.querySelector('#btn1')
// //   btn1?.addEventListener('click', clickButton)
// // }

// {
//   console.log('# debounce test')
//   let counts = 0
//   const fn = () => {
//     counts += 1
//     console.log('counts')
//     console.log(counts)
//     if (counts < 10) debouncedFn()
//   }

//   const debouncedFn = debounce(fn, 32, true)
//   debouncedFn()
// }


// // {
// //   console.log('## throttle')

// //   const clickButton = throttle((e) => {
// //     console.log('e')
// //     console.log(e)
// //   }, 2000)
// //   const btn2 = document.querySelector('#btn2')
// //   btn2?.addEventListener('click', clickButton)
// // }

// // {
// //   console.log('## chunk')
// //   const a = [1, 2, 3, 4, 5]

// //   const a1 = chunk(a, 2)
// //   console.log(a)
// //   console.log(a1)
// // }




