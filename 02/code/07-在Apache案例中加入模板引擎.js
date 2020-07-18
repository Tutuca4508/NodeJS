var http = require('http')
var fs = require('fs')
var template = require('art-template')

var server = http.createServer()

var wwwDir = 'D:/AWorkSpace/JSvscode/www'

server.on('request',function(req,res){
    var url = req.url
    // 读取要打开的目录html文本
    fs.readFile('./template.html', function (err,data) {
        // 判断是否有 模板目录文本， 
        // 如果没有就报错
        // 如果有模板目录文本，就动态读取本地目录，上传到  模板目录html文本里
        if (err) {
            return res.end('404 Not Found.')
        }

        // 1. 读取本地目录  没有 D:/AWorkSpace/JSvscode/www 就报错
        fs.readdir(wwwDir, function (err, files){
            if (err) {
                return res.end('404 Not Found Dir.')
            }
            data = template.render(data.toString(), {
                files:files
            })
            

            res.end(data)
        })
        
    })
})

server.listen(3000,function(){
    console.log('Running……');
})