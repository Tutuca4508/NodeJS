[toc]



## 1. Node.js是什么

#### 1.1 是JavaScript运行时的环境

* node.js可以解析和执行JavaScript代码
* 现在的JavaScript可以完全脱离浏览器来运行，归功于Node.js

* ###### 浏览器中的JavaScript

  * EcmaScript
    * if
    * var
    * function
    * object
    * Array
  * BOM
  * DOM

#### 1.2 Node.js中的JavaScript

* 没有BOM\DOM
* 有EcmaScript
* 在Node这个JavaScript执行环境中提供了一些服务器级别操作API
  * 例如文件读写
  * 网络服务的构建
  * 网络通信
  * http服务器
  * 等处理……

#### 1.3 Node.js特性

* 事件驱动
* 非阻塞IO模型（异步）
* 轻量和高效

## 2.Node.js能做什么

* Web服务器后台
* 命令行工具
  * npm（node开发）
  * git（c语言）
  * hexo（node）

* 游戏、接口服务器

## 3.一些资源

![image-20200714171632290](C:\Users\zhangyue\AppData\Roaming\Typora\typora-user-images\image-20200714171632290.png)

## 4.能学到什么

* B/S编程模型
  * Browser-Server
  * back-end
  * 任何服务端技术这种B/S编程模型都是一样，与语言无关
  * Node只是作为我们学习BS编程模型的一个工具而已

* 模块化编程
  * RequireJS
  * SeaJS  
  * `@import（‘文件路径’）`
  * 以前认知的JavaScript只通过 `script`标签来加载
  * 在Node中可以像 `@import（）`一样来引用加载JavaScript脚本文件

* Node常用API
* 异步编程
  * 回调函数
  * async
  * generator

* Express开发框架
* Ecmascript6
  * 在课程中穿插讲解
  * 只是新语法

* 学习Node能帮助我们打开服务器黑盒子，同时帮助我们学习以后的前端高级内容
  * Vue.js
  * React
  * angular

---

* 

##  5.最简单的 http 服务：

```javascript
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
server.on('request',function(req,res){
    
    //防止中文乱码
    res.setHeader('Content-type' , 'text/plain; charset=utf-8')
    console.log('受到客户端请求');
})

//4.绑定端口号 启动服务器
server.listen(3000,function(){
    console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/ 来进行访问');
})
```

![image-20200715160639628](C:\Users\zhangyue\AppData\Roaming\Typora\typora-user-images\image-20200715160639628.png)

##### 数组转化为json字符串

`JSON.parse('[]')`

`JSON.stringify([])`

## 6.Node中的JavaScript

* EcamScript
  * 变量
  * 方法
  * 数据类型
  * 内置对象
  * Array
  * Object
  * Date
  * Math
* 核心模块
* 第三方模块
* 用户自定义模块

#### 6.1 核心模块

* Node中没有全局作用域的概念

* Node为JavaScript提供了很多服务器级别的API，这些API绝大多数被包装到了一个具名的核心模块里。

例如文件操作的 `fs` 核心模块，

http服务构建的 `http`，

path路径操作模块 `path`

`os` 操作系统信息模块

  

以后说到核心模块，就要想到如果要使用它，就必须：

```javas
var fs = require ('fs')
var http = require('http')
```

#### 6.2用户自定义模块

* require
* exports

#### 6.3第三方模块

## 7.Web服务器开发

#### 7.1 ip地址和端口号

* ip地址用来定位计算机
* 端口号用来定位具体的应用程序
* 一切需要联网通信的软件都会占用一个端口号
* 端口号的范围从0-65536之间
* 在计算器中有一些默认端口号，最好不要去使用
  * 例如http服务的 80

* 我们在开发过程中用一些简单好记的就可
* 可以同时开启多个服务，但一定确保不同服务占用的端口号不一致才可以
* 一台计算器中，同一个端口号只能被一个程序占用

#### 7.2 Content-type

https://tool.oschina.net/commons 对照表

* 普通文本

  ```javascri
   res.setHeader('Content-type', 'text/plain; charset=utf-8')
  ```

* html文件

  ```javas
  res.setHeader('Content-type', 'text/html; charset=utf-8')
  ```

* 图片

  ```javasc
  res.setHeader('Content-type', 'image/jpeg')
  ```

  