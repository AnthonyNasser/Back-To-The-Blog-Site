import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const BlogPage = ({ match }) => {
	const [blog, setBlog] = useState({})

	useEffect(() => {
		const fetchBlog = async () => {
			const { data } = await axios.get(`/api/blogs/${match.params.id}`)

			setBlog(data)
		}

		fetchBlog()
	}, [match])

	return (
		<>
			<Link className='btn btn-light my-3' to='/blogs'>
				Go Back
			</Link>
			<Row>
				<Col md={5}>
					<Image src={blog.image} alt={blog.title} fluid />
				</Col>
				<Col md={7}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h3>{blog.title}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating value={blog.rating} text={`${blog.numRatings} ratings`} />
						</ListGroup.Item>
						<ListGroup.Item>{blog.article}</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</>
	)
}

export default BlogPage
