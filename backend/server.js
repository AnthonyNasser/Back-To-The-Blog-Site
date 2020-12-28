import express from 'express'
const app = express()
import dotenv from 'dotenv'

dotenv.config()

app.get('/api', (req, res) => {
	res.send('API is running...')
})

const PORT = process.env.PORT || 5000
app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)