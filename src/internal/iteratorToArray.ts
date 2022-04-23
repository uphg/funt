// 复制可迭代对象的每一项，转为数组
function iteratorToArray(iterator: any) {
  let data
  const result = []

  while (!(data = iterator.next()).done) {
    result.push(data.value)
  }

  return result
}

export default iteratorToArray
