import express from "express"
import * as productController from "../controllers/product.controller.js"
import { authenticate } from "../middleware/authenticate.js"

const router = express.Router()

router.post('/', authenticate, productController.createProduct)
router.post('/creates', authenticate, productController.createMultipleProducts)
router.delete('/:id', authenticate, productController.deleteProduct)
router.put('/:id', authenticate, productController.updateProduct)

export default router