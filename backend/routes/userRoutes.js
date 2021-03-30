import express from 'express'
const router = express.Router()
import { authUser, registerUser } from '../controllers/userController.js'

// Route Specifications can be found in '../controllers/userController.js'

// // Register Route
router.route('/').post(registerUser)

// // Login Route
router.post('/login', authUser)


export default router
