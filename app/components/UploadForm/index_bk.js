import React from 'react';
import Wrapper from './Wrapper';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';

const UploadForm = (props) => {
    function handleSubmit(e) {
        alert('Submitted');
        e.preventDefault();
    }

    return (
        <Wrapper>
            <Card variant="info">
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} controlId="formHorizontalCustomerId">
                        <Form.Label column sm={3}>Customer Id</Form.Label>
                        <Col sm={3}>
                            <Form.Control type="text" placeholder="Customer Id" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalApplication">
                        <Form.Label column sm={3}>Comcast Application</Form.Label>
                        <Col sm={3}>
                            <Form.Control type="file" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPrimary">
                        <Form.Label column sm={3}>Primary Identification</Form.Label>
                        <Col sm={3}>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Col>
                        <Col sm={3}>
                            <Form.Control type="file" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalSecondary">
                        <Form.Label column sm={3}>Secondary Identification</Form.Label>
                        <Col sm={3}>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Col>
                        <Col sm={3}>
                            <Form.Control type="file" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalEssentails">
                        <Form.Label column sm={3}>Internet Essentails Documents</Form.Label>
                        <Col sm={3}>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Col>
                        <Col sm={3}>
                            <Form.Control type="file" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 9, offset: 3 }}>
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
                </Card.Body>
            </Card>
        </Wrapper>
    );
}
export default UploadForm;
