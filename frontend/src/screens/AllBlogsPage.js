import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Blog from '../components/Blog'
import { listBlogs } from '../actions/blogActions'

const AllBlogsPage = () => {
	const dispatch = useDispatch()

	const blogList = useSelector((state) => state.blogList)
	const { loading, error, blogs } = blogList

	useEffect(() => {
		dispatch(listBlogs())
	}, [dispatch])

	return (
		<>
			<h1>Recently Posted Blogs</h1>
			{ loading ? (<h2>Loading...</h2>) : error ? (<h3>{error}</h3>) : 
			(
				<Row>
					{blogs.map((blog) => (
						<Col key={blog._id} sm={12} md={6} lg={4} xl={3}>
							<Blog blog={blog} />
						</Col>
					))}
				</Row>
			)}
		</>
	)
}

export default AllBlogsPage
