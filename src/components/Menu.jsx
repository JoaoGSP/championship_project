import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
          <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">Campeonato</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="nav-link" to="/teams">Times</Link>
                    <Link className="nav-link" to="/players">Jogadores</Link>
                    <Link className="nav-link" to="/coaches">Comissão Técnica</Link>
                    <Link className="nav-link" to="/referees">Arbitragem</Link>
                    <Link className="nav-link" to="/games">Jogos</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Menu
