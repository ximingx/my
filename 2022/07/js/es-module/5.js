let flag = true;
if (flag) {
    import('./4.js').then(res => {
        res.default()
    })
} else {
    console.log('err')
}
// aw
