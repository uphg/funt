---
home: true
sidebar: false
actions:
  - text: 快速开始
    link: /docs/
    type: primary
---

<HomeHeader />

## 安装

```sh
npm install funt
# or yarn add funt
```

## 在项目中导入

按需导入

```js
// ES6 modules
import { each, find, ... } from 'funt'

// CommonJS modules
const { each, find, ... } = require('funt')
```

支持单个方法引入

```js
// ES6 modules
import each from 'funt/each'

// CommonJS modules
const each = require('funt/each')
```