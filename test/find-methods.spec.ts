import * as _ from '../src/index'
import { each } from '../src/index'

describe('find methods', () => {
  const arrays = [1, 2, 3, 4]

  const objects = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
    { id: 4, name: 'd' },
    { id: 5, name: 'e' }
  ]

  const objects2 = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
    { id: 4, name: 'a' },
    { id: 5, name: 'b' },
    { id: 6, name: 'c' }
  ]

  const methods = [
    [
      'find',
      [2, objects[2], objects2[1]]
    ],
    [
      'findIndex',
      [1, 2, 1]
    ],
    [
      'findLast',
      [2, objects[2], objects2[4]]
    ],
    [
      'findLastIndex',
      [1, 2, 4]
    ]
  ]

  each(methods, (method) => {
    const name = method[0]
    const result = method[1]
    const func = _[name as string]
    describe(`${name} methods`, () => {
      it(`${name} is a function`, () => {
        expect(typeof func).toBe('function')
      })
  
      it('Desired result', () => {
        expect(func(arrays, (item) => item === 2)).toBe(result[0])
        expect(func(objects, ({ id }) => id === 3)).toBe(result[1])
        expect(func(objects2, ({ name }) => name === 'b')).toBe(result[2])
      })
    })
  })
})
