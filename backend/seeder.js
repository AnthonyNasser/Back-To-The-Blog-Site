import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import blogs from './data/blogs.js'
import User from './models/userModel.js'
import Blog from './models/blogModel.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
	try {
		// Clear all Models
		await User.deleteMany()
		await Blog.deleteMany()
		// import seeder data
		const createdUsers = await User.insertMany(users)
		// // attach a user to sample blogs
		const adminUser = createdUsers[0]._id
		const sampleBlogs = blogs.map((blog) => {
			return { ...blog, attachedUser: adminUser }
		})
		await Blog.insertMany(sampleBlogs)
		console.log('Data Imported!'.green.inverse)
		process.exit()
	} catch (error) {
		console.error(`${error}`.red.inverse)
		process.exit(1)
	}
}

const destroyData = async () => {
	try {
		// Clear all Models
		await User.deleteMany()
		await Blog.deleteMany()

		console.log('Data Destroyed!'.red.underline)
		process.exit()
	} catch (error) {
		console.error(`${error}`.red.inverse)
		process.exit(1)
	}
}

if (process.argv[2] === '-d') {
	destroyData()
} else {
	importData()
}
