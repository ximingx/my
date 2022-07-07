import { aw } from './2.js'

console.log(aw)

let name = `ximingx`

// 这里导出的是标识符, 不是对象, 是特殊语法
export {
    name as fname
}
