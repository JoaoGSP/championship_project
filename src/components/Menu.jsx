import React from 'react'
import { Button, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (

        <Navbar bg="dark" expand={false}>
            <Container fluid>
                <Navbar.Brand  className='text-light text-center' href="/">Campeonato</Navbar.Brand>
                <Navbar.Toggle className='btn btn-outline-dark' aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Campeonato</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Link className="nav-link" to="/teams">Times</Link>
                            <Link className="nav-link" to="/players">Jogadores</Link>
                            <Link className="nav-link" to="/coaches">Comissão Técnica</Link>
                            <Link className="nav-link" to="/referees">Arbitragem</Link>
                            <Link className="nav-link" to="/games">Jogos</Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

        // <Navbar bg="dark" variant="dark">
        //     <Container fluid>
        //         <Navbar.Brand href="/">Campeonato</Navbar.Brand>
        //         <Nav className="me-auto">
        //             <Link className="nav-link" to="/teams">Times</Link>
        //             <Link className="nav-link" to="/players">Jogadores</Link>
        //             <Link className="nav-link" to="/coaches">Comissão Técnica</Link>
        //             <Link className="nav-link" to="/referees">Arbitragem</Link>
        //             <Link className="nav-link" to="/games">Jogos</Link>
        //         </Nav>
        //     </Container>
        // </Navbar>
    )
}

export default Menu
