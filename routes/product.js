const router = require('express').Router()
const Product = require('../models/Product')

router.post('/create',async (req,res) =>{
    const newProduct = new Product({
        name:req.body.name,
        quantity:req.body.quantity
    });
    try{
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct)
    }
    catch(err){
        res.status(500).json(err)
    }



})

// router.get('/usertest',(req,res)=>{
//     res.send("user test successfull")
// })

// router.post("/userpost",function(req,res){
//     const username = req.body.username
//     res.send("your username is"+username)
// })

module.exports = router