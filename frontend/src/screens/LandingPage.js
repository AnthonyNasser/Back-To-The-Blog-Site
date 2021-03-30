import React from 'react'
import { Container, Row, Col, Jumbotron, Image, Button } from 'react-bootstrap'

const LandingPage = () => {
	return (
		<>
			<Jumbotron className='my-4'>
				<Container>
					<Row>
						<Col>
							<h1>Where We're Going, We Don't Need Roads.</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<h4>
								This is a template blog site inspired by the Back to The Future Trilogy and created for learning purposes. 
								All blogs on this site were produced by the ingenius{' '}
								<a
									target='_blank'
									rel='noreferrer'
									href='https://satoristudio.net/delorean-ipsum/'
									style={{ color: '#73ffb7' }}
								>
									delorean ipsum generator
								</a>{' '}.
								The site uses
								MongoDB, Express, React.js, Node.js, Redux.js, React-Bootstrap,
								React-Router, and a few other dependencies. You are free to use
								it for any learning, blogging, or copy/pasting purposes!
							</h4>
						</Col>
					</Row>
					<Row>
						<Col>
							<a
								target='_blank'
								rel='noreferrer'
								href='https://github.com/AnthonyNasser/Blog-Site'
							>
								<Button variant='info' size='lg' block>
									GREAT SCOTT! TAKE ME TO THE CODE!
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
