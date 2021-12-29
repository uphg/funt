import { each } from '../src/index'

describe('each', () => {
  it('is a function', () => {
    expect(typeof each).toBe('function')
  })

  it('Iterate the array', () => {
    const array = [1, 2, 3]
    const newArray = []
    each(array, (item) => {
      newArray.push(item * 2)
    })
    expect(newArray).toEqual([2, 4, 6])
  })

  it('Iterate the object', () => {
    const object = { a: 1, b: 2, c: 3 }
    const newObject = {}
    each(object, (item, key) => {
      newObject[key] = item * 2
    })
    expect(newObject).toEqual({ a: 2, b: 4, c: 6 })
  })

  it('Iterate the object keys', () => {
    const object = { a: 1, b: 2, c: 3 }
    const keys = []
    each(object, (__, key) => {
      keys.push(key)
    })
    expect(keys).toEqual(['a', 'b', 'c'])
  })
})
