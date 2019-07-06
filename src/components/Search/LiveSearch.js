import React from 'react'
import styles from './LiveSearch.module.css'
import {Col, Row, Container, Button} from 'react-bootstrap';
import AddEditQuestionModal from "../AddEditQuestionModal/AddEditQuestionModal";
import questions from "../../questions";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            questionObject: this.props.questionObject,
        };
    }

    answersSpans = (answers) => {
        return <span className={styles.answers}> {Object.values(answers).join(" ")} </span>
    };

    render() {
        let variant = 'primary';
        switch (this.props.labelDifficulty) {
            case "easy":
                variant = 'success';
                break;
            case "medium":
                variant = 'warning';
                break;
            case "hard":
                variant = 'danger'
        }
        const questionObjecto =
            {
                id: this.props.id,
                nameQuestion: this.props.nameQuestion,
                goodAnswer: this.props.goodAnswer,
                badAnswerFirst: this.props.badAnswerFirst,
                badAnswerSecond: this.props.badAnswerSecond,
                badAnswerThird: this.props.badAnswerThird,
                image: this.props.image,
                labelCategory: this.props.labelCategory,
                labelDifficulty: this.props.labelDifficulty,
                createdDate: this.props.createdDate,
                variantDifficultyStatus: variant,
            };

        return (
            <Container className={styles.liSearch}>
                <Row>
                    <Col><img src={this.props.image} className={styles.imgMini} alt="img"/>
                        <span style={{display: 'inline', width: '200px'}}>{this.props.nameQuestion}</span>
                        {this.props.goodAnswer
                        + '  ' + this.props.badAnswerFirst
                        + '  ' + this.props.badAnswerSecond
                        + '  ' + this.props.badAnswerThird}
                    </Col>
                    <Col style={{padding: '5px'}}><Button style={{marginLeft: '40px'}} variant={variant} size={"sm"}>
                        {this.props.labelDifficulty}</Button></Col>
                    <Col><p style={{display: 'inline', color: 'grey'}}> Created on: {this.props.createdDate}</p></Col>
                    <Col style={{padding: '5px', textAlign: 'right'}}>
                        <ButtonToolbar style={{paddingRight: '10px', justifyContent: 'flex-end', marginRight: '5px'}}
                                       size={'sm'}>
                            <DropdownButton
                                drop={'left'}
                                title={''}
                                variant={'none'}
                                id={'dropdown-variants-difficulty'}
                                key={'options'}>
                                <Dropdown.Item eventKey="edit"
                                               onClick={() => this.props.openEditQuestion(questionObjecto)}>edit</Dropdown.Item>
                                <Dropdown.Item eventKey="delete"
                                               onClick={() => this.props.deleteQuestion(this.props.id)}>delete</Dropdown.Item>
                            </DropdownButton>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default class LiveSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            modalShow: false,
            questions: questions,
            mode: "Add",
            questionObject: {
                id: '',
                nameQuestion: '',
                goodAnswer: '',
                badAnswerFirst: '',
                badAnswerSecond: '',
                badAnswerThird: '',
                labelDifficulty: 'Difficulty',
                labelCategory: 'Category',
                createdDate: '11.05.2019',
                variantDifficultyStatus: 'Dark',
            },
            searchPhrase: '',
        };
    }


    searchHandler = (event) => {
        this.setState({
            searchPhrase: event.target.value.toLowerCase()
        })
    };

    get filteredQuestions() {
        const {questions, searchPhrase} = this.state;
        if (searchPhrase === '') {
            return questions
        }
        return questions.filter((el) => {
            let searchValue = el.nameQuestion.toLowerCase();
            return searchValue.indexOf(searchPhrase) !== -1;
        });
    }

    addToListQuestion = (question) => {
        let {questions} = this.state;
        questions = [...questions, question];
        this.setState(({
            questions
        }))
    };

    openEditQuestion = (questionObject) => {
        this.setState({
            questionObject: questionObject,
            mode: "Update",
            modalShow: true
        })
    };

    editQuestion = (questionObject) => {
        let {questions} = this.state;
        const index = questions.findIndex(
            question => question.id === questionObject.id
        );
        questions[index] = questionObject;

        this.setState(({
            questions
        }))
    };

    deleteQuestion = (idQuestion) => {
        let {questions} = this.state;
        questions = questions.filter(function (obj) {
            return obj.id !== idQuestion;
        });
        this.setState(({
            questions
        }))
    };

    setLabelDifficulty = (variant, label) => this.setState({
        questionObject: {
            ...this.state.questionObject,
            variantDifficultyStatus: variant,
            labelDifficulty: label,
        }
    });

    setLabelCategory = (c) => this.setState({
        questionObject: {
            ...this.state.questionObject,
            labelCategory: c,
        }
    });

    inputValue = (propsName, value) => {
        this.setState({
            questionObject: {
                ...this.state.questionObject,
                [propsName]: value
            }
        });
    };

    resetData = () =>
        this.setState({
            questionObject: {
                nameQuestion: '',
                goodAnswer: '',
                badAnswerFirst: '',
                badAnswerSecond: '',
                badAnswerThird: '',
                labelDifficulty: 'Difficulty',
                labelCategory: 'Category',
                createdDate: '11.05.2019',
                variantDifficultyStatus: 'Dark',
            }
        });

    render() {
        let modalClose = () => this.setState({modalShow: false});
        return (
            <div className={styles.holder}>
                <div className={styles.flexContainerSearchAdd} style={{textAlign: 'center', marginBottom: '20px',}}>

                    <input placeholder={'Search'} autoFocus={true} type="text"
                           className={styles.searchInput} onChange={this.searchHandler}
                           style={{
                               borderTopRightRadius: '0',
                               borderBottomRightRadius: '0'
                           }}
                    />
                    <Button variant={"dark"} style={{borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}
                            onClick={() => this.setState({mode: "Add", modalShow: true,})}>Add</Button>
                </div>

                <AddEditQuestionModal editQuestion={this.editQuestion}
                                      questionObject={this.state.questionObject}
                                      mode={this.state.mode}
                                      show={this.state.modalShow}
                                      onHide={modalClose}
                                      addToListQuestion={this.addToListQuestion}
                                      resetData={this.resetData}
                                      setLabelDifficulty={this.setLabelDifficulty}
                                      setLabelCategory={this.setLabelCategory}
                                      inputValue={this.inputValue}

                />

                <ul className={styles.ulSearch}>
                    {
                        this.filteredQuestions.map((el) => {
                            return <Question
                                deleteQuestion={this.deleteQuestion}
                                openEditQuestion={this.openEditQuestion}
                                key={el.id}
                                questionObject={this.state.questionObject}
                                id={el.id}
                                nameQuestion={el.nameQuestion}
                                image={el.image}
                                goodAnswer={el.goodAnswer}
                                badAnswerFirst={el.badAnswerFirst}
                                badAnswerSecond={el.badAnswerSecond}
                                badAnswerThird={el.badAnswerThird}
                                labelCategory={el.labelCategory}
                                labelDifficulty={el.labelDifficulty}
                                createdDate={el.createdDate}
                            />
                        })
                    }
                </ul>
            </div>
        )
    }
}

