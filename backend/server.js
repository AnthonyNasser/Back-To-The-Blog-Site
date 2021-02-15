import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import blogRoutes from './routes/blogRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
	res.send('API is running...')
})

app.use('/api/blogs', blogRoutes)
app.use('/api/users', userRoutes)

// 404 error handling
app.use(notFound)

// JSON error handling instead of HTML
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
)
