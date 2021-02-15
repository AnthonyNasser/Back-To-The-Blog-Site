import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
	let token

	let bearerToken = req.headers.authorization
	if (bearerToken && bearerToken.startsWith('Bearer')) {
		try {
			// token is the bearerToken without the 'Bearer'
			token = bearerToken.split(' ')[1]
			const decoded = jwt.verify(token, process.env.JWT_SECRET)
			req.user = await User.findById(decoded.id).select('-password')
			next()
		} catch (error) {
			console.error(error)
			res.status(401)
			throw new Error('Not authorized, token failed...')
		}
	}

	if (!token) {
		res.status(401)
		throw new Error('Not authorized, no token found...')
	}
})

export { protect }
