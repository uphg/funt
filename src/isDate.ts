import isTag from './internal/isTag';

function isDate(value: unknown): value is Date {
  return isTag(value, 'Date')
}

export default isDate
