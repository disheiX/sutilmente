import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

function Contacto() {
    const [validated, setValidated] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({name: '', email: '', reason: '', message: '',});
    const form = useRef();

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
        event.stopPropagation();
      } else {
        setShowModal(true);
        sendEmail(event);
      }

      setValidated(true);
    };

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5audfpw', 'template_qbuo1d6', form.current, '4UAEHWvTey7zPC55S')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    const handleCloseModal = () => {
      setShowModal(false);
      window.location.reload();
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    return (
        <Container className="contacto">
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <div className="rounded border p-4" style={{ backgroundColor: '#f8f9fa' }}>
                <h2 className="text-center mb-4">Formulario de contacto</h2>
                <Form noValidate validated={validated} onSubmit={handleSubmit} ref={form}>
                  <Form.Group controlId="name" style={{ textAlign: 'left', width: '100%' }}>
                    <Form.Label className="text-left">Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nombre" required name="name" value={formData.name} onChange={handleChange} />
                    <Form.Control.Feedback type="invalid">
                      Por favor, no dejar este campo vacío.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <br />
                  <Form.Group controlId="email" style={{ textAlign: 'left', width: '100%' }}>
                    <Form.Label className="text-left">Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu mail" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" name="email" value={formData.email} onChange={handleChange} />
                    <Form.Control.Feedback type="invalid">
                      Por favor, selecciona un mail válido que contenga "@" y ".".
                    </Form.Control.Feedback>
                  </Form.Group>
                  <br />
                  <Form.Group controlId="reason" style={{ textAlign: 'left', width: '100%' }}>
                    <Form.Label className="text-left">Asunto</Form.Label>
                    <Form.Select aria-label="Default select example" name="reason" required value={formData.reason} onChange={handleChange}>
                    <option value="">Ingresar Asunto</option>
                    <option value="Pedido">Pedido</option>
                    <option value="Consulta">Consulta</option>
                    <option value="Otros">Otros</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Por favor, selecciona un asunto.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <br />
                  <Form.Group controlId="message" style={{ textAlign: 'left', width: '100%' }}>
                    <Form.Label className="text-left">Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Dejanos tus comentarios aquí!" name="message" value={formData.message} onChange={handleChange} />
                    <Form.Text className="text-muted">
                    No compartiremos tu información con nadie!
                    </Form.Text>
                  </Form.Group>
                  <br />
                  <div className="text-center">
                    <Button variant="primary" type="submit">
                      Enviar
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
          <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>¡Formulario Enviado!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Tu formulario ha sido enviado con éxito.</p>
              <p>Los detalles del formulario son:</p>
              <p><strong>Nombre:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Asunto:</strong> {formData.reason}</p>
              <p><strong>Mensaje:</strong> {formData.message}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCloseModal}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      );
}

export default Contacto;