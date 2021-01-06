import express from 'express'
const router = express.Router()
import { getBlogs, getBlogById } from '../controllers/blogController.js'

// Route Specifications can be found in '../controllers/blogController.js'

// // Get all blogs
router.route('/').get(getBlogs)

// // Get single blog
router.route('/:id').get(getBlogById)

export default router
