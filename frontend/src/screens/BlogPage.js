import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listBlogDetails } from '../actions/blogActions'

const BlogPage = ({ match }) => {
	const dispatch = useDispatch()

	const blogDetails = useSelector((state) => state.blogDetails)
	const { loading, error, blog } = blogDetails

	useEffect(() => {
		dispatch(listBlogDetails(match.params.id))
	}, [dispatch, match])

	return (
		<>
			<Link className='btn btn-light my-3' to='/blogs'>
				Go Back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
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
			)}
		</>
	)
}

export default BlogPage
