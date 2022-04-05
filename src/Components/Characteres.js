import { useEffect, useState, useReducer } from "react";
import {
  Card,
  ListGroupItem,
  ListGroup,
  Button,
  Spinner,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

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
  const [carateres, setCarateres] = useState(null); // null || []
  const [{ favorites }, dispatch] = useReducer(favoriteReducer, initialState);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });

    setFavoritos(favorites); //* envia los elementos al contexto global!!
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCarateres(data.results))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <div className="Characteres">
        {carateres === null ? (
          <div>
            <Spinner
              animation="border"
              role="status"
              style={{
                position: "absolute",
                left: "50%",
                right: "50%",
                width: "2rem",
                fontSize: "3rem",
              }}
            />
          </div>
        ) : (
          <>
            {carateres.map((personajes) => {
              return (
                <Card
                  style={{
                    width: "14rem",
                    boxShadow: `1px 1px 15px ${contexto === true && "gray"}`,
                    border: `2px solid ${
                      contexto === false ? "black" : "white"
                    }`,
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
                         Agregar a la barra de favoritos!!
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
        )}
      </div>
    </div>
  );
};

export default Characteres;
