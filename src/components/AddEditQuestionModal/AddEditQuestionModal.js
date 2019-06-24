import React from "react";
import Button from 'react-bootstrap/Button'
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AddEditQuestionModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    render() {
        return (
            <Modal {...this.props} size={"lg"} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Testowy modal -> bedzie tutaj dodawanie pytania
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row className="show-grid">
                            <Col xs={12} md={8}>
                                <code>.col-xs-12 .col-md-8</code>
                            </Col>
                            <Col xs={6} md={4}>
                                <code>.col-xs-6 .col-md-4</code>
                            </Col>
                        </Row>

                        <Row className="show-grid">
                            <Col xs={6} md={4}>
                                <code>.col-xs-6 .col-md-4</code>
                            </Col>
                            <Col xs={6} md={4}>
                                <code>.col-xs-6 .col-md-4</code>
                            </Col>
                            <Col xs={6} md={4}>
                                <code>.col-xs-6 .col-md-4</code>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
                    <Button>Save</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AddEditQuestionModal
