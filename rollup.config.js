import fs from 'fs'
import path from 'path'
import vue from 'rollup-plugin-vue'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

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
// console.log(fs.readdirSync(root))
// console.log(root, __dirname)
module.exports = fs.readdirSync(root)
    .map(item => {
        const pkg = require(path.resolve(root, item, 'package.json'))
        return {
            input: path.resolve(root, item, 'index.js'),
            output: [
                {
                    exports: 'auto',
                    file: path.resolve(root, item, pkg.main),
                    format: 'cjs'
                },
                {
                    exports: 'auto',
                    file: path.join(root, item, pkg.module),
                    format: 'es'
                }
            ],
            plugins: plugins
        }
    })