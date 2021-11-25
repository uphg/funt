import hasToStringTag from './_hasToStringTag'

const isString = (value) => hasToStringTag(value, 'String')

export default isString
