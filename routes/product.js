const router = require('express').Router()
const Product = require('../models/Product')
const postController = require('../controllers/product_controller')



router.get('/',postController.getProduct) //  to list all the product

router.post('/create',postController.create) // to create the product 

router.delete('/:id',postController.deleteProduct) // 



module.exports = router