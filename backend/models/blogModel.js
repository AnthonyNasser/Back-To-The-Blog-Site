import mongoose from 'mongoose'
import commentSchema from './commentModel.js'
import reviewSchema from './reviewModel.js'

const blogSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: false,
		},
		imageCaption: {
			type: String,
			required: false,
		},
		article: {
			type: String,
			required: true,
		},
		reviews: [reviewSchema],
		rating: {
			type: Number,
			required: true,
			default: 0,
		},
		numRatings: {
			type: Number,
			required: true,
			default: 0,
		},
		comments: {
			type: [commentSchema],
		},
		numComments: {
			type: Number,
			required: true,
			default: 0,
		},
		attachedUser: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
)

const Blog = mongoose.model('Blog', blogSchema)

export default Blog
