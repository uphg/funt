import { compact } from '../src/index'

describe('compact', () => {
  it('is a function', () => {
    expect(typeof compact === 'function').toBe(true)
  })

  it('compact array', () => {
    const a = [1, 0, 2, null, 3, void 0, 4, '', 5]
    expect(compact(a)).toEqual([1, 2, 3, 4, 5])
  })
})
