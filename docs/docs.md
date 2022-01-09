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

### <synta text="isLength(value)">isLength</synta>

检测 value 是否为有效的数组/类数组 length 属性

```js
isLength(2)
// => true

isLength(-2)
// => false

isLength(Number.Number.MIN_VALUE)
// => false
```

### <synta text="isBoolean(value)">isBoolean</synta>

检测 value 是否为布尔值

```js
isBoolean(NaN)
// => false

isBoolean(true)
// => true

isBoolean(new Boolean(false))
// => false
```

### <synta text="isString(value)">isString</synta>

检测 value 是否为字符串类型

```js
isString(1)
// => false

isString('hi')
// => true
```

### <synta text="isNumber(value)">isNumber</synta>

检测 value 是否为数字类型

```js
isNumber(1)
// => true

isNumber(NaN)
// => true

isNumber(Infinity)
// => true
```

### <synta text="isBigInt(value)">isBigInt</synta>

检测 value 是否为 BigInt 类型

```js
const bigInt = BigInt("9007199254740991")

isBigInt(bigInt)
// => true

isBigInt(1)
// => false

isBigInt(NaN)
// => false
```

### <synta text="isSymbol(value)">isSymbol</synta>

检测 value 是否为 Symobl 类型

```js
isSymbol(Symbol())
// true

isSymbol('hi')
// false
```

### <synta text="isNil(value)">isNil</synta>

检测 value 是否为空值，包括 `null` 和 `undefined`

```js
isNil(null)
// true

isNil(undefined)
// true

isNil('')
// false
```

### <synta text="isFunction(value)">isFunction</synta>

检测 value 是否为函数

```js
isFunction(() => {})
// true

isFunction(class Foo {})
// true

isFunction(async () => {})
// true

isFunction(function* foo() {})
// true

isFunction({})
// false
```

### <synta text="isObject(value)">isObject</synta>

检测 value 是否为 Object 类型，如：数组、函数、对象、正则表达式、`new Number(0)` 和 `new String('')`

```js
isObject({})
// => true

isObject([])
// => true

isObject(Function)
// => true

isObject(null)
// => false
```

### <synta text="isObjectLike(value)">isObjectLike</synta>

检测 value 是否为类似对象的结构，如果值不为 `null`，并且 typeof 的结果为 `'object'`，则该值类似对象

```js
isObjectLike({})
// => true

isObjectLike([])
// => true

isObjectLike(Function)
// => false

isObjectLike(null)
// => false
```

### <synta text="isArray(value)">isArray</synta>

检测 value 是否为数组

```js
isArray([])
// => true

isArray({})
// => false

isArray('hi')
// => false

isArray(null)
// => false
```

### <synta text="isArrayLike(value)">isArrayLike</synta>

检测 value 是否为类数组，如果值不是函数，并且 value.length 是一个大于等于 0 且小于等于 Number.MAX_SAFE_INTEGER 的整数，它就是一个类数组

```js
isArrayLike([1, 2, 3])
// => true

isArrayLike(document.body.children)
// => true

isArrayLike('hi')
// => true

isArrayLike(Function)
// => false
```

### <synta text="isArrayLikeObject(value)">isArrayLikeObject</synta>

此方法与 isArrayLike 类似，不一样的地方是它还会检查 value 是否为对象

```js
isArrayLike([1, 2, 3])
// => true

isArrayLike(document.body.children)
// => true

isArrayLike('hi')
// => false

isArrayLike(Function)
// => false
```

### <synta text="isArrayBuffer(value)">isArrayBuffer</synta>

检测 value 是否为 ArrayBuffer 对象

```js
isArrayLike([1, 2, 3])
// => true

isArrayLike(document.body.children)
// => true

isArrayLike('hi')
// => false

isArrayLike(Function)
// => false
```

### <synta text="isError(value)">isError</synta>




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