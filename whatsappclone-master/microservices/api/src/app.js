var express = require('express');
var axios = require('axios');
var request = require('request-promise');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var path = require('path');
var app = express();
var router = express.Router();

var server = require('http').Server(app);
app.use(cookieParser());
app.use(bodyParser());

app.set('port',8080);

app.get('/json', function(req, res) {
       res.json({
         message: 'Hello world'
       });
     });

//1.1 String Hello-World
app.get('/', function (req, res) {
    res.send('HELLO WORLD - Vishal Singh Rajput');
});


          
// 1.2 fetch authors
app.get('/authors', (req, res) =>{
    //1.2.1 fetches a list of authors from a request
    axios.get('https://jsonplaceholder.typicode.com/users').then(users => {
        //1.2.2 fetches a list of posts from a request
        axios.get('https://jsonplaceholder.typicode.com/posts').then(posts => {
            let op = "<ul>"; // op = output

            users.data.forEach(user => {
                //getting no. of posts by each user
                let pBU = posts.data.filter( // pBU=postsByUser
                    post => post.userId == user.id).length;
                op += '<li>' + user.name + ' has ' + pBU + ' number of posts</li>';
            });
            // a newline for each author
            op += "</ul>";
            res.send(op);
        }).catch(error => res.status(500).render('error'));
    }).catch(error => res.status(500).render('error'));
});

//1.3 set cookie
app.get('/setcookie', function (req, res) {
   res.cookie('name','Vishal');
   res.cookie('age',19);
   res.send('Cookies have been set/check on getcookie');
});
//1.4 fetch the cookies
app.get('/getcookie', function (req, res) {
    res.send('cookie name:   '+ req.cookies.name+ '<br> cookie age:  '+ req.cookies.age);
});

//1.5  robot .txt
app.get('/robots.txt',function (req,res) {
    res.status(403).send("YOU SHOULDN'T BE HERE - REQUEST DENIED.");
 });

 //1.6 render an Html page
 app.get('/html', function (req,res) {
    res.sendFile(path.join(__dirname ,'ui','file.html'));
});

//1.7 text-box
app.get('/input',function (req, res) {
    var endPoint = '/submit';//creating a variable for location of submit
    var inputBox = `
    <form action="${endPoint}" method="post">
    <label for="box" >Name</label>
    <input id="box" type="text" name="textBox" placeholder="Write your Input here">
    <button type="submit">Submit</button>    
    </form>
    `;
    //1 line for final action which is given in 'post' method
    // 2 line for label for Box and what should be given in the label
    //3 line for what the empty box will show

    res.send(inputBox);

});

app.post('/submit', function (req,res) {//post method which was recalled in input function
    console.log(req.body.textBox);
   res.redirect('/input');
  

});

app.listen(app.get('port'), function () {
    console.log('Imad Course app Listening on port 8080!');
});