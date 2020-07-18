// app application 应用程序

var http = require('http')
var fs = require('fs')
var template = require('art-template')
var comments = [
    {
        name:'张三',
        message:'今天天气不错',
        dateTime:'2022-08-03'
    },
    {
        name:'张三',
        message:'今天天气不错',
        dateTime:'2022-08-03'
    },
    {
        name:'张三',
        message:'今天天气不错',
        dateTime:'2022-08-03'
    },
    {
        name:'张三',
        message:'今天天气不错',
        dateTime:'2022-08-03'
    },
]

http
    .createServer(function (req, res) {
        var url = req.url
        if (url === '/') {
            fs.readFile('./views/index.html', function (err, data) {
                if (err) {
                    return res.end('404 Not Found')
                }
                var htmlStr = template.render(data.toString(),{
                    comments:comments
                })

                res.end(htmlStr)
            })
        } else if (url === '/post') {
            fs.readFile('./views/post.html', function (err, data) {
                if (err) {
                    return res.end('404 Not Found!')
                }
                res.end(data)
            })

        }else if (url.indexOf('/public/') === 0) {
            fs.readFile('.' + url, function (err, data) {
                if (err) {
                    return res.end('404 Not Found!')
                }
                res.end(data)
            })
        } else {
            fs.readFile('./views/404.html', function (err, data) {
                if (err) {
                    return res.end('404 Not Found!') 
                }
                res.end(data)
            })
        }
})
    .listen(3000, function () {
        console.log('running...');
    })