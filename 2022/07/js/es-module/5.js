let flag = true;
if (flag) {
    import('./4.js').then(res => {
        res.default()
    })
} else {
    console.log('err')
}
// aw
console.log(import.meta)
// [Object: null prototype] {
//   url: 'file:///E:/my/2022/07/js/es-module/5.js'
// }
