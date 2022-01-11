import React from 'react'
import {Form, Button,Row,Col} from "react-bootstrap"
import "./footer.css"


const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="left">
                <h5>Feedback Form</h5>
                <Form>
                <Form.Group className="mb-1" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                    
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    
                </Form.Group>
                <Row>
                    <Form.Label column="sm" lg={2}>
                    Message
                    </Form.Label>
                    <Col>
                    <Form.Control size="sm" type="text" placeholder="Message..." />
                    </Col>
                </Row>
                
                
                <Button variant="primary" className='mt-3' type="submit">
                    Submit
                </Button>
                </Form>
                </div>
                <div className="middle">
                    <h5>Information</h5>
                    <p>✔ Our Company</p>
                    <p>✔ Our Services</p>
                    <p>✔ Career</p>
                </div>
                <div className="right">
                    <h5>Contact info</h5>
                    <p>3A Kapoori Niwas , Achrol House Colony , Civil Lines ,Jaipur Pin - 302006</p>
                </div>
            </div>
        </>
    )
}

export default Footer
