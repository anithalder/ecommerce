import express from "express"
import * as cartItemController from "../controllers/cartItem.controller.js"
import { authenticate } from "../middleware/authenticate.js"

const router = express.Router()

router.put('/:id', authenticate, cartItemController.updateCartItem)
router.delete('/:id', authenticate, cartItemController.removeCartItem)

export default router