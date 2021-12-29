// import remain from './remain'
import deepClone from './deepClone'

// console.log('remain')
// console.log(remain([1, 2, 3, 4, 5], 1, 2))
// console.log(remain([1, 2, 3, 4, 5], 2))

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

// {
//   const obj: { [key: string]: unknown } = { a: 'hi' }
//   obj.self = obj
//   const obj2 = deepClone(obj)
//   console.log(obj2 !== obj)
// }

// {
//   // clone Set
//   const obj = {
//     a: [1, 2, 3],
//     b: new Set([4, 5, 6]),
//     c: {
//       d: 'hi',
//       e: new Set([7, 8, 9])
//     }
//   }

//   const obj2 = deepClone(obj)
//   console.log('Set')
//   console.log(obj)
//   console.log(obj2)
// }

// {
//   // clone Map
//   const obj = {
//     a: [1, 2, 3],
//     b: new Map([
//       ['a', 1],
//       ['b', 2],
//       ['c', 3]
//     ]),
//     c: {
//       d: 'hi',
//       e: new Map([
//         ['a', 1],
//         ['b', 2],
//         ['c', 3]
//       ])
//     }
//   }


//   const obj2 = deepClone(obj)
//   console.log('Map')
//   console.log(obj)
//   console.log(obj2)
// }

// {
//   const numberObj = new Number(3)
//   const booleanObj = new Boolean(false)
//   const stringObj = new String('')
//   const obj = {
//     a: [numberObj, booleanObj, booleanObj, 1, 2, 3],
//     b: {
//       p1: stringObj,
//       p2: 'hi'
//     },
//     c: {
//       b1: numberObj,
//       b2: booleanObj,
//       b3: booleanObj,
//       b4: 1,
//       b5: 2,
//       b6: 3
//     }
//   }
    
//   const obj2 = deepClone(obj)
//   console.log('Packaging Object')
//   console.log(obj)
//   console.log(obj2)
// }

{
  const a = [1, 2, 3] as any
  a.p1 = '123'
  a.p2 = '456'
  a[Symbol()] = 'hi'
  const a2 = deepClone(a)
  console.log('a')
  console.log(a)
  console.log('a2')
  console.log(a2)
}

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = '<h1>Hello Vite!</h1>'
