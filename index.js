const express = require('express');
const path = require('path');
const bodyParser= require('body-parser'); //depracated middleware module
const port= 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.urlencoded());

app.use('/',require('./routes'));

app.listen(port,function(err){
    //to find error
    if(err){
        console.log("Error in running the server",err);
    }

    console.log('Express server is running smoooooth on Port:',port);
});
