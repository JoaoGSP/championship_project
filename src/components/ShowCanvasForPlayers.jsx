import Button from 'react-bootstrap/Button'
import { useState } from "react";
import { ListGroup, Offcanvas } from "react-bootstrap";
import { FaEdit } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const ShowCanvasForPlayers = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className="d-grid gap-2">
                <Button variant="outline-info" onClick={handleShow}>
                    Informações
                </Button>
            </div>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title variant="text-center">{props.nome}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup>
                        <ListGroup.Item>{props.nome}</ListGroup.Item>
                        <ListGroup.Item>{props.gender}</ListGroup.Item>
                        <ListGroup.Item>{props.naturalidade}</ListGroup.Item>
                        <ListGroup.Item>{props.data_nasc}</ListGroup.Item>
                        <ListGroup.Item>{props.matricula}</ListGroup.Item>
                        <ListGroup.Item>{props.posicao}</ListGroup.Item>
                        <ListGroup.Item>{props.clube}</ListGroup.Item>
                    </ListGroup>

                    <div className="d-grid gap-2">
                        <Button variant="outline-primary">
                            <NavLink to={"/players/" + props.idx} > <FaEdit /></NavLink>
                        </Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default ShowCanvasForPlayers;