import emitter from '../src/emitter'

describe('eventEmitter', () => {
  it('is a function', () => {
    const eventBus = emitter()
    expect(emitter).toBeInstanceOf(Function)

    expect(eventBus.on).toBeInstanceOf(Function)
    expect(eventBus.once).toBeInstanceOf(Function)
    expect(eventBus.emit).toBeInstanceOf(Function)
    expect(eventBus.off).toBeInstanceOf(Function)
    expect(eventBus.offAll).toBeInstanceOf(Function)
  })

  // it('on event available', () => {
  //   const eventBus = emitter()
  //   eventBus.on('hi', () => {
  //     console.log('hi')
  //   })
  // })
})
