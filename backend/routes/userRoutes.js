import express from 'express'
const router = express.Router()
import {
	authUser,
	registerUser,
	getUserProfile,
	updateUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

// Route Specifications can be found in '../controllers/userController.js'

// // Register Route
router.route('/').post(registerUser)

// // Login Route
router.post('/login', authUser)

// // Get User Profile Route
router
	.route('/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile)

export default router
