import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
)

// Method to match encrypted password
userSchema.methods.matchPassword = async function(enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('User', userSchema)
export default User
