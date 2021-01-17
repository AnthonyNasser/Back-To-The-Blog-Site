import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Button, Figure } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listBlogDetails } from '../actions/blogActions'

const BlogPage = ({ history, match }) => {
	const dispatch = useDispatch()

	const blogDetails = useSelector((state) => state.blogDetails)
	const { loading, error, blog } = blogDetails

	useEffect(() => {
		dispatch(listBlogDetails(match.params.id))
	}, [dispatch, match])

	const saveArticleHandler = () => {
		history.push()
	}

	return (
		<>
			<Link className='btn btn-light my-4' to='/blogs'>
				Go Back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					<Col md={5}>
						<ListGroup.Item>
							<Figure>
								<Figure.Image src={blog.image} alt={blog.title} fluid />
								<Figure.Caption>{blog.imageCaption}</Figure.Caption>
							</Figure>
						</ListGroup.Item>
					</Col>
					<Col md={7}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h3>{blog.title}</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								<Rating
									value={blog.rating}
									text={`${blog.numRatings} ratings`}
								/>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									onClick={saveArticleHandler}
									variant='info'
									type='button'
								>
									Save Article
								</Button>
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
