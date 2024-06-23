import express from "express"
import * as authController from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/sign-up', authController.register)
router.post('/sign-in', authController.login)

export default router