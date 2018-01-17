var express = require('express');
var app = express();
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use(express.static('public'));
//指定模板引擎
app.set("views engine", 'ejs');
//指定模板位置
app.set('views', __dirname + '/views');

var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/index', function (req, res) {
    res.sendFile( __dirname + "/" + "douban.txt" );
})


app.post('/user', urlencodedParser, function (req, res) {
    var name =req.body.name;
    var passwd =req.body.passwd;
    console.log("name:"+name);
    res.write(id);
    res.end();
})

var request = require('request');

var url ="https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&_=1515738119612&topid=";

app.get('/qq',function (req, res) {
    res.sendFile( __dirname + "/" + "data/qq.txt" );
})
app.get('/toplist',function (req, res) {
    var id =req.query.id;
    request(url+id, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.write(body);
            res.end();
        }
    })

})

app.get('/getInfor',function (req, res) {
    var name =req.query.name;
    var passwd =req.query.passwd;
    console.log("name:"+name+"哈哈");
    console.log("passwd:"+passwd+"好把");

    var infor={name:name+"好把",passwd:passwd+"哈哈"};
    res.write(JSON.stringify(infor));
    res.end();
})

app.post('/infor', urlencodedParser, function (req, res) {
    var infor =req.body.infor;
    console.log("infor:"+infor);
    res.write(infor);
    res.end();
})



var server = app.listen(8088)