import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';


const Home = () => {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    phone: ''
  })
  const [record, setRecord] = useState([]);
  const [show, setShow] = useState(false);
  const [erar, seterar] = useState(false);
  const [issubmit, setSubmit] = useState(false)
  
  const handleClose = () => {
    setShow(true);
  }

  const handleShow = () => {
    setShow(false);
  }

  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value })

  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    seterar(validation(user));
    const recordValue = { ...user, id: new Date().getTime().toString() }

      setRecord([...record, recordValue]);
      setUser({ userName: '', email: '', phone: '' })
      
   



    if (!Object.keys(erar).length === 0 && issubmit) {
      
      setSubmit(true);
      
    }

  }
  const validation = (value) => {
    const errors = {};
    const emailPatern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const phonePatern = /^[0-9]{10}$/;
    if (!value.userName) {
      errors.userName = "plese enter name";
    }
    if (!value.email) {
      errors.email = "plese enter email";
    }
    else if (!emailPatern.test(value.email)) {
      errors.email = "please enter valid email";
    }
    if (!value.phone) {
      errors.phone = "plese enter phone";
    }
    else if (!phonePatern.test(value.phone)) {
      errors.phone = "plese enter valid phone number";

    }
    return errors;
  }

  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col xs={6}>
            <Card className='shadow-lg'>
              <Card.Header className='p-3' style={{ backgroundColor: "orange" }}>
                <h4 style={{ color: 'white' }}>Register Form</h4>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={HandleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      name="userName"
                      onChange={handelChange}
                      value={user.userName}
                      type="text" placeholder="Enter username" />
                    <span className='text-danger'>{erar.userName}</span>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name="email"
                      onChange={handelChange}
                      value={user.email}
                      type="text" placeholder="Enter email" />
                    <span className='text-danger'>{erar.email}</span>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      name="phone"
                      onChange={handelChange}
                      value={user.phone}
                      type="text" placeholder="Enter mobile" />
                    <span className='text-danger'>{erar.phone}</span>
                  </Form.Group>

                  <Button className='mt-3' variant="warning" type="submit" onClick={handleShow} style={{ backgroundColor: 'orange' }}>
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            {
              record.map((curElem) => {
                return (
                  <>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton style={{ backgroundColor: "orange" }} >
                        <Modal.Title>Form Result</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div key={curElem.id}>
                          <p> username : {curElem.userName}</p>
                          <p> email :  {curElem.email}</p>
                          <p> phone :  {curElem.phone}</p>
                          <p> your form has been submited</p>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                    </Modal>
                  </>
                )
              })
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home