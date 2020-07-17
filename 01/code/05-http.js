//使用Node构建Web服务器

//1. 加载http核心模块
var http = require('http')

// 2. 使用http.createSrever() 方法创建Web服务器  
//    返回一个Server实例
var server = http.createServer()

//3. 服务器干嘛
// 提供服务： 对 数据的 服务
// 发送请求
// 接受请求
// 处理请求
// 给个反馈（发送请求）
// 注册 request 请求事件
// 当客户端请求过来，就会自动除法服务器 request 请求时间，然后执行第二个参数：回调处理函数
server.on('request',function(){
    console.log('受到客户端请求');
})

//4.绑定端口号 启动服务器
server.listen(3000,function(){
    console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/ 来进行访问');
})