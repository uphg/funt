import hasToStringTag from './_hasToStringTag'

const isString = (value: unknown) => hasToStringTag(value, 'String')

export default isString
