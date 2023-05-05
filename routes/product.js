const router = require('express').Router()
// import postController
const postController = require('../controllers/product_controller')



router.get('/',postController.getProduct) //  to list all the product

router.post('/create',postController.create) // to create the product 

router.delete('/:id',postController.deleteProduct) // to delete product 

router.post('/:id/update_quantity/',postController.updateQuantity) // to update quantity



module.exports = router