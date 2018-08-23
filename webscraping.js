let express = require('express');
let app = express();
let axios = require('axios');
var rp = require('request-promise');

var urls = [ 'https://en.wikipedia.org/wiki/Futures_and_promises', 'https://en.wikipedia.org/wiki/Continuation-passing_style', 'https://en.wikipedia.org/wiki/JavaScript', 'https://en.wikipedia.org/wiki/Node.js', 'https://en.wikipedia.org/wiki/Google_Chrome' ];

p1 = rp(urls[0]);
p2 = rp(urls[1]);
p3 = rp(urls[2]);
p4 = rp(urls[3]);
p5 = rp(urls[4]);

Promise.all([p1, p2, p3, p4, p5])
    .then(function(res){
        console.log(res[0]);
        console.log(res[1]);
        console.log(res[2]);
        console.log(res[3]);
        console.log(res[4]);
    });


api_url1 = 'https://en.wikipedia.org/wiki/Futures_and_promises';
api_url2 = 'https://en.wikipedia.org/wiki/Continuation-passing_style';

// p1 = axios.get(api_url1);
// p2 = axios.get(api_url2);

// Promise.all([p1, p2])
//     .then(function(res){
//         console.log(res[0].data);
//         console.log(res[1].data);
//     });

// rp(api_url1, api_url2)
//     .then(function(res){
//        console.log(res); 
//     });

app.listen(8000, function(){
    console.log('Listening on port 8000');
});