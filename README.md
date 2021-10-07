## 安装测试依赖

```bash
yarn add jest @vue/test-utils vue-jest babel-jest -D -W
```

## Jest 的配置

jest.config.js

```js
module.exports = {
    "testMatch": ["**/__tests__/**/*.[jt]s?(x)"],
    "moduleFileExtensions": [
        "js",
        "json",
        "vue"
    ],
    "transform": {
        ".*\\.(vue)$": "vue-jest",
        ".*\\.(js)$": "babel-jest"
    }
}
```

## Jest API地址

https://www.jestjs.cn/docs/api

## Vue-test-utils API地址

https://vue-test-utils.vuejs.org/zh/api/

## Babel 的配置

babel.config.js

```js
module.exports = {
    presets: [
        [
            '@babel/preset-env'
        ]
    ]
}
```

## Babel 的桥接

```bash
yarn add babel-core@bridge -D -W
```

## Rollup 打包

```bash
yarn add rollup rollup-plugin-terser rollup-plugin-vue@5.1.9 vue-template-compiler -D -W
```

* rollup-plugin-terser
    - 对代码进行压缩
* rollup-plugin-vue
    - 把单文件组件编译成js代码, 需要指定版本,最新版本对vue3有效

## Rollup 配置文件

再对应组件目录中创建rollup.config.js

```js
import {
    terser
} from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'

module.exports = [{
    input: 'index.js',
    output: [{
        file: 'dist/index.js',
        format: 'es'
    }],
    plugins: [
        vue({
            css: true,
            compilerTemplate: true
        }),
        terser()
    ]
}]
```

### 安装依赖

```bash
yarn add @rollup/plugin-json rollup-plugin-postcss @rollup/plugin-node-resolve -D -W
```

### 配置文件

项目根目录创建rollup.config.js

```js
import fs from 'fs'
import path from 'path'
import vue from 'rollup-plugin-vue'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import {
    terser
} from 'rollup-plugin-terser'
import {
    nodeResolve
} from '@rollup/plugin-node-resolve'

const isDev = process.env.NODE_ENV !== 'production'

// 公共配置
const plugins = [
    vue({
        css: true,
        compilerTemplate: true
    }),
    json(),
    nodeResolve(),
    postcss({
        // // 把css 插入到 style 中
        // inject: true,
        // 把css放到和js同一目录
        extract: true
    })
]

isDev || plugins.push(terser())

const root = path.resolve(__dirname, 'packages')

module.exports = fs.readFileSync(root)
    .filter(item => fs.statSync(path.resolve(root, item)).isDirectory())
    .map(item => {
        const pkg = require(path.resolve(root, item, 'package.json'))
        return {
            input: path.resolve(root, item, 'index.js'),
            output: [{
                    exports: 'auto',
                    file: path.resolve(root, item, pkg.main),
                    format: 'cjs'
                },
                {
                    exports: 'auto',
                    file: path.join(root, item, pkg.main),
                    format: 'es'
                }
            ],
            plugins: plugins
        }
    })
```
