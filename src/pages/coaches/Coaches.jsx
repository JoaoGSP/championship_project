import React, { useState, useEffect } from 'react'
import { Card, Col, ListGroup, Row } from 'react-bootstrap'
import { FaEdit, FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import Button from 'react-bootstrap/Button'
import image from '../../img/tecnicos.jpg'
import CoachesService from '../../services/coaches/CoachesService'
import { NavLink } from 'react-router-dom'


const Coaches = () => {

    const [coaches, setCoaches] = useState([])

    useEffect(() => {
        const coaches = CoachesService.getAll()
        setCoaches(coaches)
    }, [])

    function excluir(idx) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            CoachesService.delete(idx)
            setCoaches(CoachesService.getAll())
        }
    }



    return (
        <>
            <Box title="Comissões Técnicas" >
                <Row xs={1} md={4} className="g-4">
                    {coaches.map((coach, idx) => (

                        <Col>
                            <Card>
                                <Card.Img variant="top" height={175} src={image} />
                                <Card.Body>
                                    <Card.Title className='text-center'>{`Comissão Técnica ` + (idx+1)}</Card.Title>
                                    <ListGroup as="ol">
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start text-center"
                                        >
                                            <div className="ms-auto me-auto">
                                                <div className="fw-bold">{coach.tecnico}</div>
                                                Tecnico
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start text-center"
                                        >
                                            <div className="ms-auto me-auto">
                                                <div className="fw-bold ">{coach.aux01}</div>
                                                Auxíliar Técnico
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start text-center"
                                        >
                                            <div className="ms-auto me-auto">
                                                <div className="fw-bold">{coach.aux02}</div>
                                                Preparador Físico
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <div className="d-grid gap-2">
                                        <Button variant="outline-primary">
                                            <NavLink to={"/coaches/" + idx} > <FaEdit /></NavLink>
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
                    <Link to="/coaches/create" className=" btn btn-secondary mb-4 " ><FaPlus /> Adicionar comissão técnica</Link>
                </div>
            </Box>
        </>
    )
}

export default Coaches;