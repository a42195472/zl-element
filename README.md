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
