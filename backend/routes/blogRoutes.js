import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Blog from '../models/blogModel.js'

// @desc    Fetch all blogs
// @route   GET /api/blogs
// @access  public
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const blogs = await Blog.find({})
		res.json(blogs)
	})
)

// @desc    Fetch single blog
// @route   GET /api/blogs/:id
// @access  public
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const blog = await Blog.findById(req.params.id)

		if (blog) {
			res.json(blog)
		} else {
			res.status(404)
			throw new Error('Blog not found')
		}
	})
)

export default router
