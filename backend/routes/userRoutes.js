import express from 'express'
const router = express.Router()
import { authUser } from '../controllers/userController.js'

// Route Specifications can be found in '../controllers/userController.js'

// // Login Route
router.route('/login').post(authUser)

export default router
