var template = require('art-template')
var fs = require('fs')

fs.readFile('./tpl.html', function (err, data) {
    if (err) {
        return res.end('读取文件失败！')
    }
    var ret = template.render(data.toString(), {
        name:'jack',
        sex:'男',
        hobbies:[
            '看书',
            '听歌',
            '学习'
        ]
    })
    console.log(ret)
})

