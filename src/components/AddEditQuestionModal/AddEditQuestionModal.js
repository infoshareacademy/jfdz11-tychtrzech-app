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

export let QUESTIONS = [
    {
        id: 1,
        name: 'Gdzie byles wczoraj',
        answers: {
            goodAnswer: 'kino',
            badAnswerFirst: 'kfc',
            badAnswerSecond: 'szkola',
            badAnswerThird: 'mcdonald',

        },
        image: 'https://cdn0.iconfinder.com/data/icons/ecology-63/64/lab-biology-science-research-chemistry-512.png',
        labelCategory: 'chemistry',
        labelDifficulty: 'medium',
        createdDate: '11.05.2019'
    },
    {
        id: 2,
        name: 'Co jadles wczoraj',
        answers: {
            goodAnswer: 'kino',
            badAnswerFirst: 'kfc',
            badAnswerSecond: 'szkola',
            badAnswerThird: 'mcdonald',

        },
        image: 'https://cdn2.iconfinder.com/data/icons/science-flat-style-1/64/science-atom-education-nuclear-physics-atomic-Electron-512.png',
        labelCategory: 'physics',
        labelDifficulty: 'hard',
        createdDate: '11.05.2019'
    },
    {
        id: 3,
        name: 'Z kim tanczyles',
        answers: {
            goodAnswer: 'kino',
            badAnswerFirst: 'kfc',
            badAnswerSecond: 'szkola',
            badAnswerThird: 'mcdonald',

        },
        image: 'https://njctl.org/static/core/img/icon-math.svg',
        labelCategory: 'math',
        labelDifficulty: 'medium',
        createdDate: '11.05.2019'
    },
    {
        id: 4,
        name: 'Co to swiat',
        answers: {
            goodAnswer: 'kino',
            badAnswerFirst: 'kfc',
            badAnswerSecond: 'szkola',
            badAnswerThird: 'mcdonald',

        },
        image: 'https://cdn0.iconfinder.com/data/icons/ecology-63/64/lab-biology-science-research-chemistry-512.png',
        labelCategory: 'chemistry',
        labelDifficulty: 'medium',
        createdDate: '11.05.2019'
    },
    {
        id: 5,
        name: 'Jak masz na imie',
        answers: {
            goodAnswer: 'kino',
            badAnswerFirst: 'kfc',
            badAnswerSecond: 'szkola',
            badAnswerThird: 'mcdonald',

        },
        image: 'https://njctl.org/static/core/img/icon-math.svg',
        labelCategory: 'math',
        labelDifficulty: 'easy',
        createdDate: '11.05.2019'
    }
];

class AddEditQuestionModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            variantDifficultyStatus: 'Dark',
            name: '',
            goodAnswer: '',
            badAnswerFirst: '',
            badAnswerSecond: '',
            badAnswerThird: '',
            labelDifficulty: 'Difficulty',
            labelCategory: 'Category',
            createdDate: '11.05.2019'
        }
    }

    validateForm() {
        return this.state.name.length > 0
            && this.state.goodAnswer.length > 0
            && this.state.badAnswerFirst.length > 0
            && this.state.labelDifficulty !== 'Difficulty'
            && this.state.labelCategory !== 'Category'
    }

    resetData = () =>
        this.setState ({
            name: '',
            goodAnswer: '',
            badAnswerFirst: '',
            badAnswerSecond: '',
            badAnswerThird: '',
            labelDifficulty: 'Difficulty',
            labelCategory: 'Category',
            createdDate: '11.05.2019'
        });

    addQuestion = () => {
        const newQuestion =
            {
                    id: 11,
                    name: this.state.name,
                    answers: {
                        goodAnswer: this.state.goodAnswer,
                        badAnswerFirst: this.state.badAnswerFirst,
                        badAnswerSecond: this.state.badAnswerSecond,
                        badAnswerThird: this.state.badAnswerThird,

                    },
                    image: 'https://cdn0.iconfinder.com/data/icons/ecology-63/64/lab-biology-science-research-chemistry-512.png',
                    labelCategory: this.state.labelCategory,
                    labelDifficulty: this.state.labelDifficulty,
                    createdDate: '11.11.2019'
            };
        QUESTIONS.push(newQuestion);
    };

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <Modal {...this.props} size={"lg"} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" as={'h1'}>
                         Add new question
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Control
                                placeholder="Put your question here..."
                                autoFocus
                                type="text"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <p style={{marginTop: '30px', display: 'inline'}}> Give us your good answer first, next ones
                            are wrong, we need at least 2. They will be shuffled in test</p>
                        <Form.Group controlId="goodAnswer">
                            <Form.Control
                                placeholder="Good answer"
                                type="email"
                                value={this.state.surname}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="badAnswerFirst">
                            <Form.Control
                                placeholder="Bad answer.."
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="badAnswerSecond">
                            <Form.Control
                                placeholder="Bad answer.."
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="badAnswerThird">
                            <Form.Control
                                placeholder="Bad answer.."
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Container className={styles.liSearch}>
                            <Row>
                                <Col>
                                    <p style={{marginTop: '30px', marginBot: '30px', display: 'inline'}}> Choose
                                        difficulty</p>
                                    <ButtonToolbar>
                                        <DropdownButton
                                            title={this.state.labelDifficulty}
                                            variant={this.state.variantDifficultyStatus.toLowerCase()}
                                            id={'dropdown-variants-difficulty'}
                                            key={this.state.variantDifficultyStatus}>
                                            <Dropdown.Item eventKey="easy" onSelect={() => this.setState({
                                                variantDifficultyStatus: 'Success',
                                                labelDifficulty: 'easy'
                                            })}
                                            >easy</Dropdown.Item>
                                            <Dropdown.Item eventKey="medium" onSelect={() => this.setState({
                                                variantDifficultyStatus: 'Warning',
                                                labelDifficulty: 'medium',
                                            })}
                                            >medium</Dropdown.Item>
                                            <Dropdown.Item eventKey="hard" onSelect={() => this.setState({
                                                variantDifficultyStatus: 'Danger',
                                                labelDifficulty: 'hard'

                                            })}
                                            >hard</Dropdown.Item>
                                        </DropdownButton>
                                    </ButtonToolbar>
                                </Col>
                                <Col>
                                    <p style={{marginTop: '30px', marginBot: '30px', display: 'inline'}}> Choose
                                        Category </p>
                                    <ButtonToolbar>
                                        <DropdownButton
                                            title={this.state.labelCategory}
                                            variant={'dark'}
                                            id={'categoryButton'}
                                            key={'labelCategory'}>
                                            <Dropdown.Item eventKey="Math"
                                                           onSelect={() => this.setState({labelCategory: 'Math'})}
                                            >Math</Dropdown.Item>
                                            <Dropdown.Item eventKey="Biology"
                                                           onSelect={() => this.setState({labelCategory: 'Biology'})}
                                            >Biology</Dropdown.Item>
                                            <Dropdown.Item eventKey="Chemistry"
                                                           onSelect={() => this.setState({labelCategory: 'Chemistry'})}
                                            >Chemistry</Dropdown.Item>
                                            <Dropdown.Item eventKey="Physics"
                                                           onSelect={() => this.setState({labelCategory: 'Physics'})}
                                            >Physics</Dropdown.Item>
                                        </DropdownButton>
                                    </ButtonToolbar>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
                    <Button
                        disabled={!this.validateForm()}
                        onClick={()=>{
                        this.addQuestion();
                        this.props.onHide();
                        this.resetData();
                    }}>Save</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AddEditQuestionModal
