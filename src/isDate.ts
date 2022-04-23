import isTag from './internal/isTag';

function isDate(value: unknown) {
  return isTag(value, 'Date')
}

export default isDate
