---
sidebar: auto
---

# API 文档

## 合集

### <synta text="each(array, callback)">each</synta>

迭代指定数组/类数组、对象，并为每个元素调用 callback，callback 传入三个参数 (currentValue, index, obj)。使用对象时根据对象的每个 key 依次调用

```js
each([1, 2, 3], (item, index) => console.log(item))
// => 1, 2, 3

each({ a: 1, b: 2, c: 3 }, (item, key) => console.log(key))
// => 'a', 'b', 'c'
```

### <synta text="map(array, callback)">map</synta>

迭代指定数组/类数组，并根据 callback 函数的返回值组成一个新的数组返回。

```js
map([1, 2, 3], (number) => number * 2)
// => [2, 4, 6]

map([1, 2, 3], (number) => number * number)
// => [1, 4, 9]
```

### <synta text="mapObject(object, callback)">mapObject</synta>

迭代指定对象，并根据 callback 函数的返回值组成一个新的数组返回。

```js
mapObject({ a: 1, b: 2, c: 3 }, (item, key) => item * 3)
// => [3, 6, 9]

mapObject({ a: 1, b: 2, c: 3 }, (item, key) => key)
// => ['a', 'b', 'c']
```

## 数组

### <synta text="find(array, callback, [fromIndex=0])">find</synta>

```js
const users = [
  { id: 1, age: 16, name: 'Jack' },
  { id: 2, age: 20, name: 'Church' },
  { id: 3, age: 22, name: 'Turing' },
  { id: 4, age: 18, name: 'Neumann' }
]

find(users, (user) => user.age > 18)
// => { id: 2, age: 20, name: 'Church' }
```

### <synta text="findIndex(array, callback, [fromIndex=0])">findIndex</synta>

```js
const users = [
  { id: 1, age: 16, name: 'Jack' },
  { id: 2, age: 20, name: 'Church' },
  { id: 3, age: 22, name: 'Turing' },
  { id: 4, age: 18, name: 'Neumann' }
]

findIndex(users, (user) => user.age > 18)
// => 1
```

### <synta text="findLast(array, callback, [fromIndex=array.length-1])">findLast</synta>

```js
const users = [
  { id: 1, age: 16, name: 'Jack' },
  { id: 2, age: 20, name: 'Church' },
  { id: 3, age: 22, name: 'Turing' },
  { id: 4, age: 18, name: 'Neumann' }
]

findLast(users, (user) => user.age > 18)
// => { id: 3, age: 22, name: 'Turing' }
```

### <synta text="findLastIndex(array, callback, [fromIndex=array.length-1])">findLastIndex</synta>

```js
const array = [1, 2, 3, 4, 3, 2, 1]

findLastIndex(array, (item) => item === 3)
// => 4

findLastIndex(array, (item) => item === 3, 3)
// => 2
```

### <synta text="indexOf(array, searchElement, [fromIndex=0])">indexOf</synta>

```js
const array = [1, 2, 3, 4, 2]

indexOf(array, (item) => item === 2)
// => 1

indexOf(array, (item) => item === 2, 2)
// => 4
```

### <synta text="lastIndexOf(array, searchElement, [fromIndex=array.length-1])">lastIndexOf</synta>

```js
const array = [1, 2, 3, 4, 2]

indexOf(array, (item) => item === 2)
// => 4

indexOf(array, (item) => item === 2, 2)
// => 1
```

## 类型判断

### <synta text="isArrayLike(value)">isArrayLike</synta>

判断指定值是否为类数组类型

```js
isArrayLike('hello')
// => true

isArrayLike({ 0: 'a', 1: 'b', 2: 'c', length: 3 })
// => true

cosnt fn = () => arguments
isArrayLike(fn(1, 2, 3))
// => true
```

### <synta text="isLength(value)">isLength</synta>

判断是否为数组/类数组的 length

```js
isLength(2)
// => true

isLength(-2)
// => false

isLength(Number.Number.MIN_VALUE)
// => false
```

### <synta text="hasInstance(value, constructor)">hasInstance</synta>

检测指定值的构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

```js
hasInstance({}, Object)
// => true

hasInstance([], Array)
// => true

hasInstance([], Object)
// => true
```