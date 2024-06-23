import express from "express"
import * as orderController from "../controllers/order.controller.js"
import { authenticate } from "../middleware/authenticate.js"

const router = express.Router()

router.post('/', authenticate, orderController.createOrder)
router.get('/user', authenticate, orderController.orderHistory)
router.get('/:id', authenticate, orderController.findOrderById)

export default router