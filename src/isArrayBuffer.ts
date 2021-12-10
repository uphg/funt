import isTag from "./_isTag";

function isArrayBuffer(value: any) {
  return isTag(value, 'ArrayBuffer')
}

export default isArrayBuffer
