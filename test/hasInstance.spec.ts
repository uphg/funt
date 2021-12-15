import hasInstance from '../src/hasInstance'

describe('hasInstance', () => {
  it('is a function', () => {
    expect(hasInstance).toBeInstanceOf(Function)
  })

  it('has constructor return `true`', () => {
    expect(hasInstance({}, Object)).toBe(true)
    expect(hasInstance([], Array)).toBe(true)
    expect(hasInstance(() => void 0, Function)).toBe(true)
  })
})