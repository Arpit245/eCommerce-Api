//Setting up the product Schema 

const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    name:{type:String,required:true,unique:true},
    quantity:{type:String,required:true}

},{
    timestamps:false,// setting timestamp as false as we dont want createAt field
    versionKey:false// setting timestamp as false as we dont want _v key 
})


const Product = mongoose.model("Product",productSchema)
module.exports = Product