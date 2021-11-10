import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <Navbar bg="success" variant="dark">
                <Navbar.Brand to="/">Câmara Aberta</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="nav-link" to="/deputados">Deputados</Link>
                    <Link className="nav-link" to="/partidos">Partidos</Link>

                    

                </Nav>
            </Navbar>
        </>
    )
}

export default Menu
