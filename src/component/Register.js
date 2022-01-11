import React from 'react'
import {Form,Button,Nav} from "react-bootstrap"
import "./login.css"
import { useNavigate  } from "react-router-dom";
import MetaData from './MetaData';


const Register = () => {
    let history = useNavigate ();

    const submitHandle = (e) =>{
        e.preventDefault();
        history("/");
        console.log("register")
    }
    return (
        <>
        <MetaData title="Register page"/>
            <div className="formContainer">
                <div className="form">
                <Form onSubmit={submitHandle}>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <Nav.Link href="/login">Sign in</Nav.Link>
                </div>
            </div>
        </>
    )
}

export default Register
