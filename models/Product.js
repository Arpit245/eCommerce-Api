const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    name:{type:String,required:true,unique:true},
    quantity:{type:String,required:true}

})


const Product = moongose.model("Product",productSchema)
module.exports = Product