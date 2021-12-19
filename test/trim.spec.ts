import { trim } from '../src/index'

describe('trim', () => {
  it('is a function', () => {
    expect(trim).toBeInstanceOf(Function)
  })

  it('Remove the spaces on both sides of the string', () => {
    expect(trim(' 123 ')).toBe('123')
    expect(trim(`
    hi
    `)).toBe('hi')
  })
})
