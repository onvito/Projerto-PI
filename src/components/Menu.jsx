import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <Navbar bg="success" variant="dark">
                <Navbar.Brand to="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="nav-link" to="/deputados">Deputados</Link>

                    

                </Nav>
            </Navbar>
        </>
    )
}

export default Menu
