const router = require('express').Router()
const Product = require('../models/Product')
const createProduct = require('../controllers/product_controller')

router.post('/create',createProduct.create)

// router.get('/usertest',(req,res)=>{
//     res.send("user test successfull")
// })

// router.post("/userpost",function(req,res){
//     const username = req.body.username
//     res.send("your username is"+username)
// })

module.exports = router