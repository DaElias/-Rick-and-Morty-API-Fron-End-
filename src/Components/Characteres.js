import { useEffect, useState } from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
function Characteres() {
  const [carateres, setCarateres] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCarateres(data.results));
  }, []);
  // console.log(carateres);
  return (
    <div className="Characteres">
      {carateres.map((personajes) => {
        return (
            <Card style={{ width: "14rem"}} key={personajes.id}>
              <Card.Img variant="top" src={personajes.image} />
              <Card.Body>
                <Card.Title>{personajes.name}</Card.Title>
                <Card.Text>Estado: {personajes.status}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <b>Genero:</b> {personajes.gender}
                </ListGroupItem>
                <ListGroupItem>
                  <b>Especie:</b> {personajes.species}
                </ListGroupItem>
                <ListGroupItem>
                  <b>created:</b> {personajes.created}
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Origen</Card.Link>
                {/* <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
        );
      })}
    </div>
  );
}

export default Characteres;
