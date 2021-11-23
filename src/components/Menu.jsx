import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            
            <Navbar bg="success" variant="dark">
            <Container>
                <Navbar.Brand to="/">Câmara Aberta</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="nav-link" to="/deputados">Deputados</Link>
                    <Link className="nav-link" to="/partidos">Partidos</Link>
                    <Link className="nav-link" to="/votacoes">Votação</Link>
                    <Link className="nav-link" to="/orgaos">Orgãos</Link>
                    <Link className="nav-link" to="/eventos">Eventos</Link>

                    

                </Nav>
            </Container>
            </Navbar>
            
        </>
    )
}

export default Menu
