import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

// @desc    Authenticate user and get token
// @route   POST /api/users/login
// @access  public
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const user = await User.findOne({ email })

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		})
	} else {
		res.status(401)
		throw new Error('Invalid email or password')
	}
})

// @desc    Register a new user
// @route   POST /api/users
// @access  public
const registerUser = asyncHandler(async (req, res) => {
	const { firstName, lastName, email, password } = req.body

	const userExists = await User.findOne({ email })

	if (userExists) {
		res.status(400)
		throw new Error('User already exists...')
	}

	const user = await User.create({
		firstName,
		lastName,
		email,
		password
	})

	if (user) {
		res.status(201).json({
			_id: user._id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		})
	} else {
		res.status(400)
		throw new Error('User Data is invalid...')
	}
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  private
const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id)
	if (user) {
		res.json({
			_id: user._id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			isAdmin: user.isAdmin,
		})
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  private
const updateUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id)
  
	if (user) {
	  user.name = req.body.firstName || user.firstName
	  user.name = req.body.lastName || user.lastName
	  user.email = req.body.email || user.email
	  if (req.body.password) {
		user.password = req.body.password
	  }
  
	  const updatedUser = await user.save()
  
	  res.json({
		_id: updatedUser._id,
		firstName: updatedUser.firstName,
		lastName: updatedUser.lastName,
		email: updatedUser.email,
		isAdmin: updatedUser.isAdmin,
		token: generateToken(updatedUser._id),
	  })
	} else {
	  res.status(404)
	  throw new Error('User not found')
	}
  })

export { authUser, registerUser, getUserProfile, updateUserProfile }
