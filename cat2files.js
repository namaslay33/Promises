let express = require('express');
let app = express();
var fs = require('fs');


input1 = 'hello.txt';
input2 = 'bye.txt';
let catFile;

function cat2files (input1, input2){

    var promise = new Promise(function (resolve, reject) {
        try{
            fs.readFile(input1, 'utf8', function(err, data){
                if (err){
                    reject(err)
                }
                else{
                    catFile = data;
                    resolve(data);
                }
            })
        }
        catch(err){
            reject(err)
        }
    })
    .then (function(results){
        
        fs.readFile(input2, 'utf8', function(err, data){
            
                catFile += data;

                return results;
        })
    })
    .then (function(results){

        console.log(catFile);
        
        fs.writeFile('output.txt', catFile, 'utf8', function(err){
            if (err) reject(err);
        })
    }).catch(function(err) {
        console.log("error here: " + err);
    });
    
    return promise;
 
}

cat2files(input1, input2);


app.listen(8000, function(){
    console.log('Listening on port 8000');
})