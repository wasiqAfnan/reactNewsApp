import React from "react";
import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import News from "./News";

const MyNavbar = () => {
    const [category,setCategory] = useState("");
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">WasiqNews</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Select Category" id="collapsible-nav-dropdown">
                                <NavDropdown.Item 
                                onClick={()=>setCategory("business")}>Business
                                </NavDropdown.Item>

                                <NavDropdown.Item 
                                onClick={()=>setCategory("entertainment")}>
                                    Entertainment
                                </NavDropdown.Item>

                                <NavDropdown.Item 
                                onClick={()=>setCategory("health")}>Health
                                </NavDropdown.Item>

                                <NavDropdown.Item 
                                onClick={()=>setCategory("sports")}>Sports
                                </NavDropdown.Item>

                                <NavDropdown.Item 
                                onClick={()=>setCategory("technology")}>Technology
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <News category={category}/>
        </>
    )
}

export default MyNavbar;