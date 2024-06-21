import express from "express"
import * as cartController from "../controllers/cart.controller.js"
import { authenticate } from "../middleware/authenticate.js"

const router = express.Router()

router.get('/', authenticate, cartController.findUserCart)
router.put('/add', authenticate, cartController.addItemToCart)

export default router