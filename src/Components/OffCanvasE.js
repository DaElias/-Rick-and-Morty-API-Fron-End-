import React, { useState, useContext } from "react";
import { Offcanvas, Button, ListGroup, Badge } from "react-bootstrap";
import ThemeContex from "../Context/ThemeContex";

const OffCanvasExample = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const elementosFavoritos = useContext(ThemeContex);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="light"
        onClick={handleShow}
        className="me-2 animation"
        style={{
          position: "fixed",
          right: "2%",
        }}
      >
        <b style={{ paddingRight: "8px" }}>{name}</b>
        <Badge bg="primary" pill>
          {elementosFavoritos.length}
        </Badge>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>Elementos Favoritos</h3>
          {/* <code>//code here</code> */}
          <ListGroup as="ol" numbered>
            {elementosFavoritos.map((elementos, key) => (
              // <li key={key}>{elementos.name}</li>
              <ListGroup.Item key={key} as="li">
                {elementos.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

/**
 * 
  
  <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
  <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
  <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>

 * 
*/
export default OffCanvasExample;
