import express from "express"
import * as productController from "../controllers/product.controller.js"
import { authenticate } from "../middleware/authenticate.js"

const router = express.Router()

router.get('/', authenticate, productController.getAllProducts)
router.get('/id/:id', authenticate, productController.findProductById)

export default router