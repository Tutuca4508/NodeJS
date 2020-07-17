const template = require('art-template')
const path = require('path')

const views = path.join(__dirname, 'views', 'index.art')

// template 方法用来拼接字符串
// 1. 模板路径 是绝对路径
var html = template(views, {
    name:'张三',
    age:20
})

console.log(html);