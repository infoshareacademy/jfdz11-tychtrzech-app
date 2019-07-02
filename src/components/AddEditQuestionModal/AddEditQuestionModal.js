import React from "react";
import Button from 'react-bootstrap/Button'
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Dropdown from 'react-bootstrap/Dropdown'
import styles from './AddEditQuestionModal.module.css'
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

class AddEditQuestionModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            questionObject: this.props.questionObject,
        }
    }

    validateForm() {
        console.log(this.props.questionObject.nameQuestion);
        return this.props.questionObject.nameQuestion.length > 0
            && this.props.questionObject.goodAnswer.length > 0
            && this.props.questionObject.badAnswerFirst.length > 0
            && this.props.questionObject.labelDifficulty !== 'Difficulty'
            && this.props.questionObject.labelCategory !== 'Category'
    }


    handleSubmit = event => {
        event.preventDefault();
    };

    addQuestion = () => {
        const {addToListQuestion} = this.props;
        const currentTime = new Date().toLocaleString();
        const newQuestion =
            {
                id: 12,
                nameQuestion: this.props.questionObject.nameQuestion,
                goodAnswer: this.props.questionObject.goodAnswer,
                badAnswerFirst: this.props.questionObject.badAnswerFirst,
                badAnswerSecond: this.props.questionObject.badAnswerSecond,
                badAnswerThird: this.props.questionObject.badAnswerThird,
                image: 'https://cdn0.iconfinder.com/data/icons/ecology-63/64/lab-biology-science-research-chemistry-512.png',
                labelCategory: this.props.questionObject.labelCategory,
                labelDifficulty: this.props.questionObject.labelDifficulty,
                createdDate: currentTime
            };
            addToListQuestion(newQuestion)
    };

    render() {
        const {
            addToListQuestion,
            inputValue,
            setLabelDifficulty,
            setLabelCategory,
            resetData,
            questionObject,
            ...rest
        } = this.props;
        return (
            <Modal {...rest} size={"lg"} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" as={'h1'}>
                        Add new question
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="nameQuestion">
                            <Form.Control
                                placeholder="Put your question here..."
                                autoFocus
                                type="text"
                                value={questionObject.nameQuestion}
                                onChange={(event) => this.props.inputValue('nameQuestion', event.target.value)}
                            />
                        </Form.Group>
                        <p style={{marginTop: '30px', display: 'inline'}}> Give us your good answer first, next ones
                            are wrong, we need at least 2. They will be shuffled in test</p>
                        <Form.Group controlId="goodAnswer">
                            <Form.Control
                                placeholder="Good answer"
                                type="email"
                                value={questionObject.goodAnswer}
                                onChange={(event) => inputValue('goodAnswer', event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="badAnswerFirst">
                            <Form.Control
                                placeholder="Bad answer.."
                                type="email"
                                value={questionObject.badAnswerFirst}
                                onChange={(event) => inputValue('badAnswerFirst', event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="badAnswerSecond">
                            <Form.Control
                                placeholder="Bad answer.."
                                type="email"
                                value={questionObject.badAnswerSecond}
                                onChange={(event) => inputValue('badAnswerSecond', event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="badAnswerThird">
                            <Form.Control
                                placeholder="Bad answer.."
                                type="email"
                                value={questionObject.badAnswerThird}
                                onChange={(event) => inputValue('badAnswerThird', event.target.value)}

                            />
                        </Form.Group>
                        <Container className={styles.liSearch}>
                            <Row>
                                <Col>
                                    <p style={{marginTop: '30px', marginBot: '30px', display: 'inline'}}> Choose
                                        difficulty</p>
                                    <ButtonToolbar>
                                        <DropdownButton
                                            title={this.props.questionObject.labelDifficulty}
                                            variant={this.props.questionObject.variantDifficultyStatus.toLowerCase()}
                                            id={'dropdown-variants-difficulty'}
                                            key={this.state.variantDifficultyStatus}>
                                            <Dropdown.Item eventKey="easy" onSelect={() =>
                                                setLabelDifficulty('Success', 'easy')
                                            }
                                            >easy</Dropdown.Item>
                                            <Dropdown.Item eventKey="medium"
                                                           onSelect={() =>
                                                               setLabelDifficulty('Warning', 'medium')
                                                           }
                                            >medium</Dropdown.Item>
                                            <Dropdown.Item eventKey="hard" onSelect={() =>
                                                setLabelDifficulty('Danger', 'hard')
                                            }
                                            >hard</Dropdown.Item>
                                        </DropdownButton>
                                    </ButtonToolbar>
                                </Col>
                                <Col>
                                    <p style={{marginTop: '30px', marginBot: '30px', display: 'inline'}}> Choose
                                        Category </p>
                                    <ButtonToolbar>
                                        <DropdownButton
                                            title={this.props.questionObject.labelCategory}
                                            variant={'dark'}
                                            id={'categoryButton'}
                                            key={'labelCategory'}>
                                            <Dropdown.Item eventKey="Math"
                                                           onSelect={() => setLabelCategory('Math')}
                                            >Math</Dropdown.Item>
                                            <Dropdown.Item eventKey="Biology"
                                                           onSelect={() => setLabelCategory('Biology')}
                                            >Biology</Dropdown.Item>
                                            <Dropdown.Item eventKey="Chemistry"
                                                           onSelect={() => setLabelCategory('Chemistry')}
                                            >Chemistry</Dropdown.Item>
                                            <Dropdown.Item eventKey="Physics"
                                                           onSelect={() => setLabelCategory('Physics')}
                                            >Physics</Dropdown.Item>
                                        </DropdownButton>
                                    </ButtonToolbar>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                            onClick={() => {
                                this.props.onHide();
                                resetData();
                            }}>Close</Button>
                    <Button
                        disabled={!this.validateForm()}
                        onClick={() => {
                            this.addQuestion();
                            this.props.onHide();
                            resetData();
                        }}>Save</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AddEditQuestionModal
