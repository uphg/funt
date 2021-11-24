import typeTester from "./typeTester"

const isArray = (value) => Array.isArray ? Array.isArray(value) : typeTester('Array')

export default isArray
