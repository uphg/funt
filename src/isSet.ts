import isTag from './_isTag';

function isSet(value: unknown) {
  return isTag(value, 'Set')
}

export default isSet
