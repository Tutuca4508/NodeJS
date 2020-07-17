//使用Node构建Web服务器


var http = require('http')
const { report } = require('process')


var server = http.createServer()


server.on('request',function(request,response){
    console.log('受到客户端请求,请求路径是'+request.url)

    if (request.url == '/') {
        response.write('index')
        response.end()
    } else if (request.url == '/login'){
        response.write('登录')
        response.end()
    }else if (request.url == '/haha') {
        response.write('哈哈')
        response.end()
    }

    // //response对象只有一个方法：write 可以用来给客户端发送响应数据
    // // write 可以使用多次，但是最后一定要是要end来结束相应，否则客户端会一直等待
    // response.write('hello')
    // response.write('Node.js')
    // // 告诉客户端，我的话说完了，可以呈递给用户了
    // response.end()
})


server.listen(3000,function(){
    console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/ 来进行访问');
})