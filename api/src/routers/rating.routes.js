import express from "express"
import * as ratingController from "../controllers/rating.controller.js"
import { authenticate } from "../middleware/authenticate.js"

const router = express.Router()

router.post('/create', authenticate, ratingController.createRating)
router.put('/product/:productId', authenticate, ratingController.getAllRatings)

export default router