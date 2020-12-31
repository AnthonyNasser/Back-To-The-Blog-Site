import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Blog from '../components/Blog'
import axios from 'axios'

const AllBlogsPage = () => {
	const [blogs, setBlog] = useState([])

	useEffect(() => {
		const fetchBlogs = async () => {
			const { data } = await axios.get('/api/blogs')

			setBlog(data)
		}

		fetchBlogs()
	}, [])

	return (
		<>
			<h1>Recently Posted Blogs</h1>
			<Row>
				{blogs.map((blog) => (
					<Col key={blog._id} sm={12} md={6} lg={4} xl={3}>
						<Blog blog={blog} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default AllBlogsPage
