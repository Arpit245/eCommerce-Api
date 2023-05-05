const Product = require('../models/Product');

module.exports.create = async function(req,res){

    const newProduct = new Product({
        name:req.body.name,
        quantity:req.body.quantity
    });
    try{
    const savedProduct = await newProduct.save();
    return res.status(201).json(savedProduct)  //status code for success
    }
    catch(err){
        return res.status(500).json(err) //status code for failure
    }


}