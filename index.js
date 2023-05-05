const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('./config/mongoose')
const UserRoute = require('./routes/product')


app.use(express.json()) // to pass json file

// using body parser to parse over the request body
app.use(bodyParser.json());
app.use('/products',UserRoute)


const port = 8000
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the port ${error}`)
    }

    console.log(`Server running on ${port}`)
})