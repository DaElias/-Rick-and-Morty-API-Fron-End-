import React from "react";
import Characteres from "./Components/Characteres";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import ThemeContex from "./Context/ThemeContex";
import { useState } from "react";

const App = () => {
  const [contexto, setContexto] = useState(true);
  const [favoritos, setFavoritos] = useState([]);

  const handleClik = () => {
    setContexto(!contexto);
  };

  return (
    <div style={{ backgroundColor: contexto === false ? "black" : "white" }}>
      <ThemeContex.Provider value={favoritos} >
        <Header contexto={contexto} handleClik={handleClik} />
        <Container>
          <div style={{ paddingTop: "80px" }}>
            <Characteres contexto={contexto} setFavoritos={setFavoritos} />
          </div>
        </Container>
      </ThemeContex.Provider>
    </div>
  );
};

export default App;
