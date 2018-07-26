var express=require('express');

var app=express();//实例化

// app.get('/',function(req,res){
//     res.send('你好')
// })

// app.get('/news',function(req,res){
//     res.send('news模块')
// })

/**动态路由http://localhost:3001/newscontent/123 */
// app.get('/newscontent/:aid',function(req,res){
//     //获取动态路由的传值
//     console.log(req.params);

//     var aid=req.params.aid;
 
//     res.send('newscontent:'+'aid='+aid)
// })

/**get传值http://localhost:3001/product?aid=123 */
// app.get('/product',function(req,res){
//     //获取get的传值
//     console.log(req.query);

//     var aid=req.query.aid;

//     res.send('product模块:'+'aid='+aid)
// })



/***********express框架下使用ejs*****************/

// app.set('view engine','ejs'); //配置ejs模板引擎

// app.use(express.static('public')); //给public目录下面的文件配置静态web服务

// app.use('/static',express.static('public')); //配置虚拟目录的静态web服务

// app.get('/',function(req,res){

//     res.render('index'); //渲染ejs的模板

// })

// app.get('/news',function(req,res){
    
//     var arr=['111','222','333'];

//     res.render('news',{
//         list:arr
//     }); //渲染ejs的模板,并且传值

// })




/***********express框架中间件*****************/

//body-parser中间件
// var bodyParser=require('body-parser');

// app.use(bodyParser.urlencoded({extended:false}));

// app.use(bodyParser.json());


// app.set('view engine','ejs');

// app.get('/login',function(req,res){
//     res.render('login')
// })

// app.post('/doLogin',function(req,res){
//     console.log(req.body)  //获取post提交的数据
// })


//next()  路由继续向下匹配
// app.use(function(req,res,next){ //匹配任何路由

//     console.log(new Date());
//     next();
// })

//cookie中间件
var cookieParser=require('cookie-parser');

app.use(cookieParser());

app.get('/set',function(req,res){
    res.cookie('username','cookie的值',{maxAge:60000})
    res.send('设置cookie成功') 
})


app.get('/',function(req,res){
    console.log(req.cookies)
    res.send('你好') 
})

app.listen(3001,'127.0.0.1');