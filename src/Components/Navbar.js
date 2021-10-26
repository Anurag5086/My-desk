import React, { useState, useEffect } from "react";
import LogoutHooks from "../page-components/Auth/LogoutHooks";
import { Navbar, Nav } from "react-bootstrap";
import { Button } from "@material-ui/core";

function NavbarComponenet() {
  const username = localStorage.getItem("googleUser");
  const [d, setd] = useState(new Date());
  useEffect(() => {
    setd(new Date());
  }, []);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="transparant" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item style={{ marginLeft: "1rem" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                Welcome,
              </span>
              <span
                style={{ fontSize: "1.25rem", fontWeight: "bold" }}
              >{` ${username}!`}</span>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item
              style={{
                fontSize: "20px",
                color: "black",
                marginRight: "20px",
                marginTop: "4px",
              }}
            >{`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`}</Nav.Item>
            <Button
              href="/groupstudying"
              variant="contained"
              style={{
                marginTop: "6px",
                color: "black",
                fontSize: "15px",
                marginRight: "10px",
                backgroundColor: "#9f5f80",
                color: "white",
              }}
            >
              Group Study
            </Button>
            <Nav.Item style={{ marginTop: "6px" }}>
              <LogoutHooks />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarComponenet;
