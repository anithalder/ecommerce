import express from "express"
import * as reviewController from "../controllers/review.controller.js"
import { authenticate } from "../middleware/authenticate.js"

const router = express.Router()

router.post('/create', authenticate, reviewController.createReview)
router.get('/product/:productId', authenticate, reviewController.getAllReview)

export default router