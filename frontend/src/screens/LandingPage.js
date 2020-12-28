import React from 'react'
import { Container, Row, Col, Jumbotron, Image, Button } from 'react-bootstrap'

const LandingPage = () => {
	return (
		<>
			<Jumbotron className='my-4'>
				<Container>
					<Row>
						<Col>
							<h1>Hello, my name is ABC XYZ...</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<h4>
								This is a template blog site that is inspired by the the
								delorean ipsum generator (of which all the blogs are composed).
								The site uses MongoDB, Express, React.js, Node.js,
								React-Bootstrap, React-Router, and a few other dependencies.You
								are free to use it for any of your blogging, copy/pasting, or
								personal purposes.
							</h4>
						</Col>
					</Row>
					<Row>
						<Col>
							<a
								target='_blank'
								href='https://github.com/AnthonyNasser/Blog-Site'
							>
								<Button variant='primary' size='lg' block>
									Take me to the code!
								</Button>
							</a>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
			<Container>
				<Row>
					<Col>
						<Image src='/Delorean1.jpg' fluid rounded />
					</Col>
					<Col>
						<Image src='/Delorean2.jpg' fluid rounded />
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default LandingPage
