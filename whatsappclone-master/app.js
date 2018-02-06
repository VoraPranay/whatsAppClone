const express = require('express');


const app = express();


//a simple hello-world
app.get('/', (req, res) => res.send('Hello World - vishal'));

app.get(' /html',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
});
//sign-up
app.post('/signup', function(req,res) {
    var fetchAction =  require('node-fetch');

var url = "https://auth.contrast67.hasura-app.io/v1/signup";

var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    }
};

var body = {
    "provider": "username",
    "data": {
        "username": "vishu123",
        "password": "js@hasura"
    }
};

requestOptions.body = JSON.stringify(body);

fetchAction(url, requestOptions)
.then(function(response) {
	return response.json();
})
.then(function(result) {
	console.log(JSON.stringify(result));
})
.catch(function(error) {
	console.log('Request Failed:' + error);
});
res.send('Registration Cpmplete');

});

//LOGIN
app.post('/login', function(req,res)  {

    var fetchAction =  require('node-fetch');

    var url = "https://auth.contrast67.hasura-app.io/v1/login";
    
    var requestOptions = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        }
    };
    
    var body = {
        "provider": "username",
        "data": {
            "username": "admin",
            "password": 'hoqgula-czuwulz-edantob-ungaku'
        }
    };
    
    requestOptions.body = JSON.stringify(body);
    
    fetchAction(url, requestOptions)
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(JSON.stringify(result));
    })
    .catch(function(error) {
        console.log('Request Failed:' + error);
    });
    res.send('Successfully logged in');
})


//local host
app.listen(3000, ()=> console.log('Imad Course app Listening on port 8080!')
);