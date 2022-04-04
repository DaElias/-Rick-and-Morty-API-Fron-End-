import React, { useContext } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import ThemeContex from "../Context/ThemeContex";
import OffCanvasExample from "./OffCanvasE";

const Header = ({  handleClik,contexto }) => {
  // const color = useC ontext(ThemeContex);

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
        <Button variant="link" style={{fontSize:"20px",textDecoration:"none"}} onClick={handleClik}> {contexto===true?"🌝":"🌚"}</Button>
      </Container>
    </Navbar>
  );
};

export default Header;
