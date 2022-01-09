---
sidebar: auto
---

# API 文档

## 合集

### <synta text="each(array, callback)">each</synta>

迭代指定数组/类数组、对象，并为每个元素调用 callback，callback 传入三个参数 (currentValue, index, obj)。使用对象时根据对象的每个 key 依次调用

```js
each([1, 2, 3], (item) => console.log(item))
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
mapObject({ a: 1, b: 2, c: 3 }, (num, key) => num * 3)
// => [3, 6, 9]

mapObject({ a: 1, b: 2, c: 3 }, (num, key) => key)
// => ['a', 'b', 'c']
```

## 数组

### <synta text="find(array, callback)">find</synta>

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

### <synta text="findIndex(array, callback)">find</synta>

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


## 类型

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

### <synta text="hasInstance(value, constructor)">hasInstance</synta>

检测指定值的构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

```js
hasInstance({}, Object)
// => true
```