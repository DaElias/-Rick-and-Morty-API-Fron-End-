import { useEffect, useState, useReducer } from "react";
import { Card, ListGroupItem, ListGroup, Button, Row } from "react-bootstrap";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, acction) => {
  switch (acction.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, acction.payload],
      };

    default:
      return state;
  }
};

const Characteres = ({ setFavoritos, contexto }) => {
  const [carateres, setCarateres] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
    setFavoritos(favorites.favorites); //* envia los elementos al contexto global!!
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCarateres(data.results));
  }, []);

  return (
    <div>
      {/* <Row>
        <Col>
          <div>
            {favorites.favorites.map((favorito, key) => (
              <li key={key}>{favorito.name}</li>
            ))}
          </div>
        </Col>
      </Row> */}
      <div className="Characteres">
        {carateres.map((personajes) => {
          return (
            <Card
              style={{
                width: "14rem",
                boxShadow: `1px 1px 15px ${
                  contexto === false ? "white" : "gray"
                }`,
                border: `2px solid ${contexto === false ? "black" : "white"}`,
              }}
              key={personajes.id}
            >
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
                <Button
                  style={{ margin: "20px 0px 0px 0px" }}
                  onClick={() => handleClick(personajes)}
                >
                  Agregar a Favoritos!
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Characteres;
