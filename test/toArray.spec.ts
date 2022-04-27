import { toArray } from '../src/index'
import { arrayProto } from './_utils'

describe('toArray', () => {
  it('is a function', () => {
    expect(typeof toArray).toBe('function')
  })

  it('objects to arrays', () => {
    expect(toArray({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3])
    expect(toArray({ 0: 'a', 1: 'b', 2: 'c' })).toEqual(['a', 'b', 'c'])
  })

  it('iterable to arrays', () => {
    if (Symbol && Symbol.iterator) {
      const obj = { 0: 'a', length: 1 }
      obj[Symbol.iterator] = arrayProto[Symbol.iterator]
      expect(toArray(obj)).toEqual(['a'])
    }
  })

  it('map to arrays', () => {
    const map = new Map
    map.set('a', 1)
    map.set('b', 2)
    map.set('c', 3)
    expect(toArray(map)).toEqual([['a', 1], ['b', 2], ['c', 3]])
  })

  it('set to arrays', () => {
    const set = new Set
    set.add(1)
    set.add(2)
    set.add(3)
    expect(toArray(set)).toEqual([1, 2, 3])
  })

  it('string to arrays', () => {
    expect(toArray('hello')).toEqual(['h', 'e', 'l', 'l', 'o'])
  })
})
