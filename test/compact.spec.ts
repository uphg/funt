import { compact } from '../src/index'

describe('compact', () => {
  it('is a function', () => {
    expect(typeof compact).toBe('function')
  })

  it('compact array', () => {
    const a = [1, 0, 2, null, 3, void 0, 4, '', 5]
    const b = [0, 1, false, 2, '', 3, NaN, 4, undefined]

    expect(compact(a)).toEqual([1, 2, 3, 4, 5])
    expect(compact(b)).toEqual([1, 2, 3, 4])
  })
})
