let express = require('express');
let app = express();
var fs = require('fs');
var concat = require('concat-files');

input1 = 'hello.txt';
input2 = 'bye.txt';


function cat2files (input1, input2){

    var promise = new Promise (function (resolve, reject) {

        input = fs.appendFile(input1, input2, (err) => {
            if (err) throw err;
                console.log('It did not work');
        })

        fs.readFile(input, (err, data) => {
            if (err) reject (err);
            console.log(data); 
            })
        
        .then(function(input){
            fs.writeFile('output.txt', input, (err) => {
                if (err) reject (err);
                console.log('The file has been saved!');
            })
        })
    });
    return promise; 
}

cat2files(input1, input2);

app.listen(8000, function(){
    console.log('Listening on port 8000');
});