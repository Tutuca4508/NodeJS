var fs = require('fs')

fs.writeFile('./data/你好.md','大家好，我是Node.js',function(error){
    if (error) {
        console.log('写入失败');
    }else{
        console.log('写入成功');
    }
})

//  成功：
//      文件写入成功
//      error 是 null
//  失败：
//      文件写入失败
//      error 就是错误对象