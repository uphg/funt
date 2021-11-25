import toStringTag from './_toStringTag'

const isString = (value) => toStringTag(value, 'String')

export default isString
