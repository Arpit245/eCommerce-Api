const Product = require('../models/Product');

// function to create(post) products in DB 

module.exports.create = async function(req,res){

    const newProduct = new Product({
        name:req.body.name,
        quantity:req.body.quantity
    });
    try{
    const savedProduct = await newProduct.save(); //using save function to save data in db
    return res.status(201).json(savedProduct)  //status code for success
    }
    catch(err){
        return res.status(500).json(err) //status code for failure
    }


}

//function to fetch product detail from db

module.exports.getProduct = async function(req,res){
    try{
        const products = await Product.find();
        res.status(201).json({data:products})
    }

    catch(err){
        res.status(501).json(err);
    }
}

//function to delete product 

// delete product by id
module.exports.deleteProduct = async function (req, res) {
    try {
        await Product.deleteOne({ "_id": req.params.id });
        res.status(200).json({ data: { message: "product deleted" } });
    } catch (error) {
        res.status(400).json({ data: { message: "No product is found with the id" } });
    }

};