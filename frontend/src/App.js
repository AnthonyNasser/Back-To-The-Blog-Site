import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './screens/LandingPage'
import BlogPage from './screens/BlogPage'
import AllBlogsPage from './screens/AllBlogsPage'
import LoginPage from './screens/LoginPage'
import RegisterPage from './screens/RegisterPage'


const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/blog/:id' component={BlogPage} />
					<Route path='/blogs' component={AllBlogsPage} />
					<Route path='/login' component={LoginPage} />
					<Route path='/register' component={RegisterPage} />
					<Route path='/' exact component={LandingPage} />
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
