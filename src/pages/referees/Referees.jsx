import React, { useState, useEffect } from 'react'
import { Card, Col, ListGroup, Row } from 'react-bootstrap'
import { FaEdit, FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import Button from 'react-bootstrap/Button'
import image from '../../img/apito.png'
import RefereesService from '../../services/referees/RefereesService'
import { NavLink } from 'react-router-dom'


const Referees = () => {

    const [referees, setReferees] = useState([])

    useEffect(() => {
        const referees = RefereesService.getAll()
        setReferees(referees)
    }, [])

    function excluir(idx) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            RefereesService.delete(idx)
            setReferees(RefereesService.getAll())
        }
    }



    return (
        <>
            <Box title="Equipes de Arbitragem" >
                <Row xs={1} md={4} className="g-4">
                    {referees.map((referee, idx) => (

                        <Col>
                            <Card>
                                <Card.Img variant="top" height={170} src={image} />
                                <Card.Body>
                                    <Card.Title className='text-center'>{`Equipe de Arbitragem ` + (idx+1)}</Card.Title>
                                    <ListGroup as="ol">
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start text-center"
                                        >
                                            <div className="ms-auto me-auto">
                                                <div className="fw-bold">{referee.arbitro}</div>
                                                Árbritro Principal
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start text-center"
                                        >
                                            <div className="ms-auto me-auto">
                                                <div className="fw-bold ">{referee.bandeira01}</div>
                                                Bandeirinha 01
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start text-center"
                                        >
                                            <div className="ms-auto me-auto">
                                                <div className="fw-bold">{referee.bandeira02}</div>
                                                Bandeirinha 02
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start text-center"
                                        >
                                            <div className="ms-auto me-auto">
                                                <div className="fw-bold">{referee.auxarbitro01}</div>
                                                4° Árbitro
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start text-center"
                                        >
                                            <div className="ms-auto me-auto">
                                                <div className="fw-bold">{referee.auxarbitro02}</div>
                                                5° Árbitro
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <div className="d-grid gap-2">
                                        <Button variant="outline-primary">
                                            <NavLink to={"/referees/" + idx} > <FaEdit /></NavLink>
                                        </Button>
                                        <Button variant='outline-danger' key={idx} onClick={() => excluir(idx)} >
                                            <FaRegTrashAlt title="Excluir" />
                                        </Button>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div className='text-center' position="relative">
                    <Link to="/referees/create" className=" btn btn-secondary mb-4 " ><FaPlus /> Adicionar equipe de arbitragem</Link>
                </div>
            </Box>
        </>
    )
}

export default Referees;