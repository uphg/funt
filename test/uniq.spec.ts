import { uniq } from '../src/index'

describe('uniq', () => {
  it('is a function', () => {
    expect(typeof uniq).toBe('function')
  })

  it('return array unique', () => {
    expect(uniq([1])).toEqual([1])
    expect(uniq([2, 3, 1, 3, 2])).toEqual([2, 3, 1])
    expect(uniq([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3])
    expect(uniq([-1/0, -0, NaN, void 0, -0, NaN, 1, void 0, -1/0])).toEqual([-1/0, -0, NaN, void 0, 1])
    expect(uniq([-0, -0, +0, +0, -1/0, -1/0, NaN, NaN, null, null, void 0, void 0])).toEqual([-0, +0, -1/0, NaN, null, void 0])
  })
})
