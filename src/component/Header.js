import React from 'react'
import { useState } from 'react'
import {NavLink,Navbar,Nav,NavDropdown,Container} from "react-bootstrap"
import {Link} from "react-router-dom"

const Header = () => {
    return (
    <>
    <Navbar bg="primary" expand="sm">
        <Container>
            <Navbar.Brand href="/">DESERT GREENS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="contact us" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/request">Request callback</NavDropdown.Item>
                    <NavDropdown.Item href="/chat">Chat on whatsapp</NavDropdown.Item>
                    <NavDropdown.Divider />
                    
                </NavDropdown>
                <Nav.Link href="login">Login/Signup</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}

export default Header
