import isTag from './_isTag';

function isDate(value: unknown) {
  return isTag(value, 'Date')
}

export default isDate
