import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {
	const dispatch = useDispatch()

	const userLogin = useSelector((state => state.userLogin))
	const { userInfo } = userLogin

	const logoutHandler = () => {
		dispatch(logout())
	}
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>
							<i style={{ color: '#73ffb7' }} className='fas fa-fire fa-fw'></i>
							Back to the Blog Site
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<LinkContainer to='/blogs'>
								<Nav.Link>
									<i
										style={{ color: '#73ffb7' }}
										className='fas fa-book fa-fw'
									></i>
									Blogs
								</Nav.Link>
							</LinkContainer>
							{userInfo ? (
								<NavDropdown title={`${userInfo.firstName} ${userInfo.lastName}`} id='username'>
									<LinkContainer to='/profile'>
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) :
							<LinkContainer to='/login'>
								<Nav.Link>
									<i
										style={{ color: '#ff6161' }}
										className='fas fa-user fa-fw'
									></i>
									Sign In
								</Nav.Link>
							</LinkContainer> }
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
