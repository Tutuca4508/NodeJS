var fs = require('fs')
fs.readFile('./data/helloword.txt',function(error,data){

    if(error) {
        console.log('读取文件失败');
    }else{
        console.log(data.toString());
    }



})

// 成功
//      data 数据
//      error null
// 失败
//      data undefined没有数据
//      error 错误对象