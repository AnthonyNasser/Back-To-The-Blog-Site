import mongoose from 'mongoose'

const commentSchema = mongoose.Schema(
	{
		threadtitle: {
			type: String,
			required: true,
		},
		thread: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

export default commentSchema
