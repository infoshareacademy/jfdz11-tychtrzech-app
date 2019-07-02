import React from 'react'
import styles from './LiveSearch.module.css'
import {Col, Row, Container, Button} from 'react-bootstrap';
import AddEditQuestionModal from "../AddEditQuestionModal/AddEditQuestionModal";
import questions from "../../questions";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";


class Contact extends React.Component {
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

    render () {

        // const questionObjecto =
        //     {
        //         id: 12,
        //         nameQuestion: 'testowy name',
        //         answers: {
        //             goodAnswer: 'testowy name',
        //             badAnswerFirst: 'testowy name',
        //             badAnswerSecond: 'testowy name',
        //             badAnswerThird: 'testowy name',
        //
        //         },
        //         image: 'https://cdn0.iconfinder.com/data/icons/ecology-63/64/lab-biology-science-research-chemistry-512.png',
        //         labelCategory: 'testowy name',
        //         labelDifficulty: 'testowy name',
        //         createdDate: '22',
        //         variantDifficultyStatus: 'Dark',
        //     };

        let variant = 'primary';
        switch (this.props.labelDifficulty){
            case "easy":
                variant = 'success';
                break;
            case "medium":
                variant = 'warning';
                break;
            case "hard":
                variant = 'danger'
        }

        return (
            <Container className={styles.liSearch}>
                <Row>
                    <Col><img src={this.props.image} className={styles.imgMini} alt="img"/>
                        <span style={{display: 'inline', width: '200px'}}>{this.props.nameQuestion}</span>
                        {this.answersSpans(this.props.answers)}
                    </Col>
                    <Col style={{padding: '5px'}}><Button style={{marginLeft: '40px'}} variant={variant} size={"sm"}>
                        {this.props.labelDifficulty}</Button></Col>
                    <Col><p style={{display: 'inline', color: 'grey'}}> Created on: {this.props.createdDate}</p></Col>
                    <Col style={{padding: '5px', textAlign: 'right'}}>
                        <ButtonToolbar style={{paddingRight: '10px', justifyContent: 'flex-end', marginRight: '5px'}} size={'sm'}>
                            <DropdownButton
                                drop={'left'}
                                title={''}
                                variant={'none'}
                                id={'dropdown-variants-difficulty'}
                                key={'options'}>
                                <Dropdown.Item eventKey="edit" onClick={()=>this.props.editQuestion()}>edit</Dropdown.Item>
                                <Dropdown.Item eventKey="delete">delete</Dropdown.Item>
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


    searchHandler = (event) =>  {
        this.setState({
            searchPhrase: event.target.value.toLowerCase()
        })
    };

    get filteredQuestions () {
        const { questions, searchPhrase } = this.state;
        if (searchPhrase === '') {
            return questions
        }
        return questions.filter((el) => {
            let searchValue = el.nameQuestion.toLowerCase();
            return searchValue.indexOf(searchPhrase) !== -1;
        });
    }

    addToListQuestion = (question) => {
        console.log('to jest nowe pytanie'  + question);
        const newQuestions = [...questions, question];
        this.setState(({
            questions: newQuestions
        }))
    }

    editQuestion = (questionObject) => {
        console.log(questionObject)
        this.setState(({
            //questionObject,
            modalShow: true,
        }))
    };


    setLabelDifficulty = (variant,label) => this.setState({
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
            questionObject:{
                ...this.state.questionObject,
                [propsName]: value
            }
        });
    };

    resetData = () =>
        this.setState ({
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

    render () {
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div className={styles.holder}>
                <div className={styles.flexContainerSearchAdd} style={{textAlign: 'center', marginBottom: '20px',}}>

                <input placeholder={'Search'} autoFocus={true} type="text"
                       className={styles.searchInput} onChange={this.searchHandler}
                       style={{borderTopRightRadius: '0',
                           borderBottomRightRadius: '0'}}
                />
                <Button variant={"dark"} style={{borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}
                        onClick={() => this.setState({ modalShow: true })}>Add</Button>
                </div>

                <AddEditQuestionModal questionObject={this.state.questionObject}
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
                            return <Contact
                                            editQuestion={this.editQuestion}
                                            key={el.id}
                                            questionObject={this.state.questionObject}
                                            nameQuestion={el.nameQuestion}
                                            image={el.image}
                                            answers={el.answers}
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
};

