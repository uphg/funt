import { delay } from '../src/index'

describe('delay', () => {
  it('is a function', (done) => {
    const mockFn = jest.fn()
    delay(mockFn, 100)

    setTimeout(() => {
      expect(mockFn.mock.calls.length).toBe(0)
    }, 50)
    setTimeout(() => {
      expect(mockFn.mock.calls.length).toBe(1)
      done()
    }, 150)
  })
})
