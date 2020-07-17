var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request',function(req,res) {

    var url = req.url
    if (url === '/'){
        fs.readFile('./resource/index.html',function(err,data){
            if (err) {
                res.setHeader('Content-type', 'text/plain; charset=utf-8')
                res.end('文件读取失败，请稍后重试')
            }else {
                // data 默认是二进制数据， 可通过tostring转化字符
                // res.end() 支持两种数据类型： 二进制 / 字符串
                res.setHeader('Content-type', 'text/html; charset=utf-8')
                res.end(data)
            }
        })
    } else if (url === '/baby') {
        fs.readFile('./resource/nice.jpg',function(err,data){
            if (err) {
                res.setHeader('Content-type','text/plain; charset=utf-8')
                res.end('读取文件失败，请重新加载')
            }else  {
                res.setHeader('Content-type','image/jpeg')
                res.end(data)
            }
        })
    }


})

server.listen(3000, function(){
    console.log('Server is running...');
})