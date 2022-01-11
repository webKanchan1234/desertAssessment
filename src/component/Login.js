import React,{useState} from 'react'
import {Form,Button,Nav} from "react-bootstrap"
import "./login.css"
import { useNavigate  } from "react-router-dom";
import validate from "validator"
import MetaData from './MetaData';


const Login = () => {
    let history = useNavigate ();
    
    const [emailError, setEmailError] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
  
  


  const handleChange = (e) => {
    const email = e.target.value;
    const pass = e.target.value;
    if(validate.isEmail(email)){
        setEmailError('Valid Email :)')
        
      } else {
        setEmailError('Enter valid Email!')
      }
      if (validate.isStrongPassword(pass, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
      })) {
        setErrorMessage('Strong Password')
      } else {
        setErrorMessage('Not Strong Password')
      }
  };


    const submitHandle = (e) =>{
        e.preventDefault();
        history("/");
        
    }
    return (
        <>
        <MetaData title="Login Page"/>
            <div className="formContainer">
                <div className="form">
                
                <Form onSubmit={submitHandle}>
                <pre>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"  
                onChange={handleChange} placeholder="Enter email" />
                </Form.Group> <br />
                <span style={{
                fontWeight: 'bold',
                color: 'red',
                }}>{emailError}</span>
                </pre>
                <pre>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" 
                    onChange={handleChange}   placeholder="Password" />
                    </Form.Group>
                    <span style={{
                    fontWeight: 'bold',
                    color: 'red',
                    }}>{errorMessage}</span>
                </pre>
                <Button variant="primary" type="submit">
                    Sign in
                </Button>
            </Form>
                
            <Nav.Link href="/register">Register</Nav.Link>
                </div>
            </div>
        </>
    )
}

export default Login
