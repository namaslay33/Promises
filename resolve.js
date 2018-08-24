let express = require('express');
let app = express();
var fs = require('fs');

var x = 8;
var y = 7;

function addNumbers(x, y) {

    Promise.all([x,y])
    .then(function (ans){
        console.log(ans[0] + ans[1]); 
    }) 
  .catch(function (error) { 
      console.log(error); 
    });
}
addNumbers(x,y)
     

app.listen(8000, function(){
    console.log('Listening on port 8000');
})