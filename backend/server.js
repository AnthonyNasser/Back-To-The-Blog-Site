import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import path from 'path'

import blogRoutes from './routes/blogRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
connectDB()
const __dirname = path.resolve()

const app = express()

app.use(express.json())

app.use('/api/blogs', blogRoutes)
app.use('/api/users', userRoutes)

if (process.env.NODE_ENV == 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')))

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	)
} else {
	app.get('/', (req, res) => {
		res.send('API is running...')
	})
}

// 404 error handling
app.use(notFound)

// JSON error handling instead of HTML
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
