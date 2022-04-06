/**{ useContext}  */
import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
// import ThemeContex from "../Context/ThemeContex";
import OffCanvasExample from "./OffCanvasE";

const Header = ({ handleClik, contexto }) => {
  return (
    <Navbar bg={contexto === false ? "black" : "light"} fixed="top">
      <Container>
        <Navbar.Brand
          style={{ color: contexto === true ? "black" : "white" }}
          href="#"
        >
          Rick and Morty API
        </Navbar.Brand>
        <OffCanvasExample name="Menu" />

        <Button
          variant="link"
          style={{
            fontSize: "20px",
            textDecoration: "none",
            position: "absolute",
            left: "10px",
            top: "20%",
            backgroundColor:
              contexto === false
                ? "black"
                : "rgba(var(--bs-light-rgb),var(--bs-bg-opacity))",
          }}
          onClick={handleClik}
        >
          {" "}
          {contexto === true ? "🌝" : "🌚"}
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
