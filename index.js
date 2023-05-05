const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('./config/mongoose')
const UserRoute = require('./routes/product')




//creating server on prt 8000
const port = 8000
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the port ${error}`)
    }
    
    console.log(`Server running on ${port}`)
})



// using body parser to parse over the request body
app.use(bodyParser.json());
app.use('/products',UserRoute)