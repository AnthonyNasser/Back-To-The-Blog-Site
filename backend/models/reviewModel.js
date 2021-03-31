import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		rating: { type: String, required: true },
	},
	{
		timestamps: true,
	}
)

export default reviewSchema
