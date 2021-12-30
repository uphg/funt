// import remain from './remain'
import deepClone from './deepClone'
import isFinite from './isFinite'
import debounce from './debounce'
import throttle from './throttle'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = '<h1>Hello Vite!</h1> <button id="btn1">点击防抖</button> <button id="btn2">点击节流</button>'

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

// {
//   const a = [1, 2, 3] as any
//   a.p1 = '123'
//   a.p2 = '456'
//   a[Symbol()] = 'hi'
//   const a2 = deepClone(a)
//   console.log('a')
//   console.log(a)
//   console.log('a2')
//   console.log(a2)
// }

{
  let index = 0
  const length = 10
  
  while (index < length) {
    console.log(index)
    index += 1
  }
}

{
  console.log('## Copy symbol')
  const object = {
    p1: 'a',
    p2: 'b',
    p3: 'c',
    [Symbol()]: 'd',
    [Symbol()]: 'e',
    [Symbol()]: 'f'
  }
  const object2 = deepClone(object)
  console.log('deepClone copy symbol property')
  console.log(object)
  console.log(object2)
}

{
  console.log('## isFinite')
  console.log('isFinite(true)')
  console.log(isFinite(true))
  console.log('isFinite(Infinity)')
  console.log(isFinite(Infinity))
}

{
  console.log('deepClone DataView')
  const buffer = new ArrayBuffer(16)
  const view1 = new DataView(buffer)
  const view2 = new DataView(buffer, 12, 4)

  const view3 = deepClone(view1)
  const view4 = deepClone(view2)
  console.log(view1)
  console.log(view3)
  console.log(view2)
  console.log(view4)
}

{
  console.log('## debounce')

  const clickButton = debounce((e) => {
    console.log('e')
    console.log(e)
  }, 2000)
  const btn1 = document.querySelector('#btn1')
  btn1?.addEventListener('click', clickButton)
}


{
  console.log('## throttle')

  const clickButton = throttle((e) => {
    console.log('e')
    console.log(e)
  }, 2000)
  const btn2 = document.querySelector('#btn2')
  btn2?.addEventListener('click', clickButton)
}




