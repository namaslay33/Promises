let express = require('express');
let app = express();
var rp = require('request-promise');
var fs = require('fs');


url = 'http://www.issarae.com';
filename = 'issa.txt';

var saveWebPage = (url, filename) => {

 promise1 = rp(url); 
 promise2 = filename;

   
    promise1.then(function(promise1){
        fs.writeFile(promise2, promise1, function(error){
            if(error) throw error
        })
        
    });
    

   
};

saveWebPage(url, filename);


app.listen(8000, function(){
    console.log('Listening on port 8000');
});