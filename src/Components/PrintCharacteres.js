import React from "react";
import {
  Card,
  ListGroup,
  OverlayTrigger,
  Button,
  Tooltip,
  ListGroupItem,
} from "react-bootstrap";

const PrintCharacteres = ({ contexto, carateres, handleClick }) => {
  return (
    <>
      {carateres.map((personajes) => {
        return (
          <Card
            style={{
              width: "14rem",
              boxShadow: `1px 1px 15px ${contexto === true && "gray"}`,
              border: `2px solid ${contexto === false ? "black" : "white"}`,
              backgroundColor: contexto === true ? "white" : "black",
            }}
            key={personajes.id}
          >
            <Card.Img variant="top" src={personajes.image} />
            <Card.Body>
              <Card.Title
                style={{ color: contexto === false ? "white" : "black" }}
              >
                {personajes.name}
              </Card.Title>
              <Card.Text
                style={{ color: contexto === false ? "white" : "black" }}
              >
                Estado: {personajes.status}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem
                style={{
                  backgroundColor: contexto === true ? "white" : "black",
                  color: contexto === false ? "white" : "black",
                }}
              >
                <b>Genero:</b> {personajes.gender}
              </ListGroupItem>
              <ListGroupItem
                style={{
                  backgroundColor: contexto === true ? "white" : "black",
                  color: contexto === false ? "white" : "black",
                }}
              >
                <b>Especie:</b> {personajes.species}
              </ListGroupItem>
              <ListGroupItem
                style={{
                  backgroundColor: contexto === true ? "white" : "black",
                  color: contexto === false ? "white" : "black",
                }}
              >
                <b>created:</b> {personajes.created}
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Origen</Card.Link>
              {/* <Card.Link href="#">Another Link</Card.Link> */}

              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Tooltip id={`tooltip-$bottom`}>
                    Agregar a <b>{personajes.name}</b> a favoritos!!
                  </Tooltip>
                }
              >
                <Button
                  style={{ margin: "20px 0px 0px 0px" }}
                  onClick={() => handleClick(personajes)}
                >
                  Agregar a Favoritos!
                </Button>
              </OverlayTrigger>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default PrintCharacteres;
